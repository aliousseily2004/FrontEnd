import React, { useState, useRef } from "react";
import { 
  Upload, 
  Plus, 
  Trash2, 
  Save, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2,
  Video
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CreateCourse = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Form State
  const [courseTitle, setCourseTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");
  
  // Media State
  const [thumbnailUrl, setThumbnailUrl] = useState(""); // For URL input
  const [introVideo, setIntroVideo] = useState<File | null>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // Curriculum State
  const [lessons, setLessons] = useState([{ id: Date.now(), title: "", duration: "" }]);

  // Handlers
  const addLesson = () => setLessons([...lessons, { id: Date.now(), title: "", duration: "" }]);
  
  const removeLesson = (id: number) => {
    if (lessons.length > 1) {
      setLessons(lessons.filter(lesson => lesson.id !== id));
    }
  };

  const updateLesson = (id: number, field: string, value: string) => {
    setLessons(lessons.map(l => l.id === id ? { ...l, [field]: value } : l));
  };

  const handlePublish = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // 1. Calculate duration
      const totalDuration = lessons.reduce((acc, l) => acc + (parseInt(l.duration) || 0), 0);

      // 2. Use FormData for File Upload support
      const formData = new FormData();
      formData.append("CourseTitle", courseTitle);
      formData.append("ShortDescription", shortDescription);
      formData.append("FullDescription", fullDescription);
      formData.append("Difficulty", difficulty);
      formData.append("CourseDuration", totalDuration.toString());
      formData.append("IsPublished", "true");
      formData.append("CourseThumbnail", thumbnailUrl);
      
      // Append the actual video file
      if (introVideo) {
        formData.append("IntroVideo", introVideo);
      }

      // 3. POST to HTTPS port 7126
      const res = await fetch("https://localhost:5251/api/course", {
        method: "POST",
        // Note: Do NOT set Content-Type header when using FormData
        credentials: "include", 
        body: formData
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Failed to create course");
      }

      setSuccess(true);
      alert("Course Published Successfully!");
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Stepper Header */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -z-10" />
        {[1, 2, 3].map((s) => (
          <div 
            key={s}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              step >= s ? "bg-primary text-white" : "bg-muted text-muted-foreground"
            }`}
          >
            {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
          </div>
        ))}
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">
          {step === 1 && "Basic Information"}
          {step === 2 && "Course Media"}
          {step === 3 && "Curriculum Builder"}
        </h1>
        <p className="text-muted-foreground">Step {step} of 3</p>
      </div>

      {/* Step 1: Basic Details */}
      {step === 1 && (
        <Card className="border-none shadow-md p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Course Title</label>
            <input 
              type="text" 
              className="w-full p-3 rounded-lg border bg-background"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Short Description</label>
            <textarea 
              rows={2}
              className="w-full p-3 rounded-lg border bg-background"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Full Description</label>
            <textarea 
              rows={4}
              className="w-full p-3 rounded-lg border bg-background"
              value={fullDescription}
              onChange={(e) => setFullDescription(e.target.value)}
            />
          </div>
        </Card>
      )}

      {/* Step 2: Media Upload */}
      {step === 2 && (
        <div className="grid gap-6">
          <Card className="p-8 space-y-4">
            <label className="text-sm font-semibold">Thumbnail URL</label>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                <Upload className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="https://example.com/image.jpg"
                className="flex-1 p-2 border rounded-lg" 
                value={thumbnailUrl}
                onChange={e => setThumbnailUrl(e.target.value)} 
              />
            </div>
          </Card>
          
          <Card className="p-6 bg-secondary/20 border-2 border-dashed border-primary/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Video className="text-primary w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-semibold">Intro Video</p>
                <p className="text-xs text-muted-foreground">
                  {introVideo ? `Selected: ${introVideo.name}` : "Max size 50MB. MP4 recommended."}
                </p>
              </div>
              
              {/* Hidden File Input */}
              <input 
                type="file" 
                accept="video/*" 
                className="hidden" 
                ref={videoInputRef}
                onChange={(e) => setIntroVideo(e.target.files?.[0] || null)}
              />
              
              <Button variant="outline" onClick={() => videoInputRef.current?.click()}>
                {introVideo ? "Change Video" : "Select File"}
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Step 3: Curriculum */}
      {step === 3 && (
        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <div key={lesson.id} className="flex gap-4 items-center bg-card p-4 border rounded-xl">
              <span className="text-muted-foreground font-bold">#{index + 1}</span>
              <input 
                placeholder="Lesson Title" 
                className="flex-1 p-2 border-b bg-transparent outline-none"
                value={lesson.title}
                onChange={(e) => updateLesson(lesson.id, "title", e.target.value)}
              />
              <input 
                placeholder="Min" 
                className="w-20 p-2 border-b bg-transparent outline-none text-center"
                value={lesson.duration}
                onChange={(e) => updateLesson(lesson.id, "duration", e.target.value)}
              />
              <Button variant="ghost" size="icon" onClick={() => removeLesson(lesson.id)}>
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </div>
          ))}
          <Button variant="outline" className="w-full border-dashed" onClick={addLesson}>
            <Plus className="mr-2 w-4 h-4" /> Add Lesson
          </Button>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button variant="ghost" onClick={() => setStep(step - 1)} disabled={step === 1}>
          <ChevronLeft className="mr-2 w-4 h-4" /> Previous
        </Button>
        
        {step < 3 ? (
          <Button className="px-8" onClick={() => setStep(step + 1)}>
            Next <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        ) : (
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8" onClick={handlePublish} disabled={loading}>
            <Save className="mr-2 w-4 h-4" /> {loading ? "Publishing..." : "Publish Course"}
          </Button>
        )}
      </div>

      {error && <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">{error}</div>}
      {success && <div className="p-4 bg-green-50 text-green-600 rounded-lg border border-green-200">Course created!</div>}
    </div>
  );
};

export default CreateCourse; 