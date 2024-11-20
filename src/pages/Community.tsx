import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Share2, Users } from "lucide-react";

const Community = () => {
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Community Hub</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect with other innovators, share your workflows, and learn from the community.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover-card">
          <CardHeader>
            <Users className="h-8 w-8 mb-4 text-primary" />
            <CardTitle>Discussion Forums</CardTitle>
            <CardDescription>
              Join conversations about AI, workflows, and consciousness integration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <MessageSquare className="mr-2 h-4 w-4" /> Join Discussions
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-card">
          <CardHeader>
            <Share2 className="h-8 w-8 mb-4 text-primary" />
            <CardTitle>Share Center</CardTitle>
            <CardDescription>
              Share your workflows and discover community-created templates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Browse Templates</Button>
          </CardContent>
        </Card>

        <Card className="hover-card">
          <CardHeader>
            <Users className="h-8 w-8 mb-4 text-primary" />
            <CardTitle>Events</CardTitle>
            <CardDescription>
              Participate in hackathons, workshops, and community meetups.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">View Events</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;