import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const MyProfile = () => {
  return (
    <div className="flex flex-col items-start gap-6">
      <img
        src="/avatar.jpg"
        alt="User avatar"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
      />

      <div className="flex-1 space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Michael Williams</h2>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>m.williams@example.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>(212) 555-7890</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>New York, Brooklyn</span>
            </div>
          </div>
        </div>

        <Button variant="outline">Edit profile</Button>
      </div>
    </div>
  );
};

export default MyProfile;
