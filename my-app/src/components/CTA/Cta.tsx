import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
export default function Cta() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-none bg-card">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Learning?
                </h2>

                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Join thousands of learners and start your journey today. Get
                  access to all courses and start building your future.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="gradient-bg h-12 px-8 text-white shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Link to="/login" className="flex items-center gap-2">
                      Start Learning Free
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  {[
                    "No credit card required",
                    "Free courses available",
                    "Cancel anytime",
                  ].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
