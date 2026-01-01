import React, { useState } from "react";
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
  
  // State for Curriculum (Dynamic List)
  const [lessons, setLessons] = useState([{ id: 1, title: "", duration: "" }]);

  const addLesson = () => {
    setLessons([...lessons, { id: Date.now(), title: "", duration: "" }]);
  };

  const removeLesson = (id: number) => {
    setLessons(lessons.filter(lesson => lesson.id !== id));
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
              step >= s ? "gradient-bg text-white" : "bg-muted text-muted-foreground"
            }`}
          >
            {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
          </div>
        ))}
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-display font-bold">
          {step === 1 && "Basic Information"}
          {step === 2 && "Course Media"}
          {step === 3 && "Curriculum Builder"}
        </h1>
        <p className="text-muted-foreground">Step {step} of 3</p>
      </div>

      {/* Step 1: Basic Details */}
      {step === 1 && (
        <Card className="border-none shadow-md">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Course Title</label>
              <input 
                type="text" 
                placeholder="e.g. Advanced React Patterns" 
                className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Short Description</label>
              <textarea 
                rows={3}
                placeholder="A brief summary for the course card..." 
                className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Category</label>
                <select className="w-full p-3 rounded-lg border bg-background outline-none">
                  <option>Development</option>
                  <option>Business</option>
                  <option>Design</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Price ($)</label>
                <input type="number" placeholder="49.99" className="w-full p-3 rounded-lg border bg-background outline-none" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Media Upload */}
      {step === 2 && (
        <div className="grid gap-6">
          <Card className="border-dashed border-2 hover:bg-muted/50 transition-colors cursor-pointer">
            <CardContent className="p-12 flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="text-primary w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="font-bold">Upload Course Thumbnail</p>
                <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB (16:9 ratio recommended)</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm bg-secondary/30">
            <CardContent className="p-6 flex items-center gap-4">
              <Video className="text-primary w-6 h-6" />
              <div className="flex-1">
                <p className="font-semibold">Intro Video</p>
                <p className="text-xs text-muted-foreground">Upload a 1-2 minute preview for students.</p>
              </div>
              <Button variant="outline" size="sm">Select File</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Step 3: Curriculum */}
      {step === 3 && (
        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <div key={lesson.id} className="flex gap-4 items-start bg-card p-4 border rounded-xl animate-in slide-in-from-bottom-2">
              <div className="pt-3 text-muted-foreground font-bold">#{index + 1}</div>
              <div className="flex-1 grid grid-cols-3 gap-4">
                <input 
                  placeholder="Lesson Title" 
                  className="col-span-2 p-2 border-b bg-transparent outline-none focus:border-primary"
                />
                <input 
                  placeholder="Duration (min)" 
                  className="p-2 border-b bg-transparent outline-none focus:border-primary"
                />
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-destructive"
                onClick={() => removeLesson(lesson.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <Button 
            variant="outline" 
            className="w-full border-dashed py-6"
            onClick={addLesson}
          >
            <Plus className="mr-2 w-4 h-4" /> Add New Lesson
          </Button>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-8">
        <Button 
          variant="ghost" 
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
        >
          <ChevronLeft className="mr-2 w-4 h-4" /> Previous
        </Button>
        
        {step < 3 ? (
          <Button 
            className="gradient-bg text-white px-8"
            onClick={() => setStep(step + 1)}
          >
            Next Step <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        ) : (
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
            <Save className="mr-2 w-4 h-4" /> Publish Course
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateCourse;