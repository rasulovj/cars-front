"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  List,
  Star,
  CreditCard,
  Settings,
  HelpCircle,
  LogOut,
  CircleEllipsis,
} from "lucide-react";
import Wrapper from "@/shared/wrapper";

const sidebarItems = [
  { label: "My profile", icon: User },
  { label: "My listings", icon: List },
  { label: "Reviews", icon: Star },
  { label: "Favorites", icon: Star },
  { label: "Payment details", icon: CreditCard },
  { label: "Account settings", icon: Settings },
  { label: "Help center", icon: HelpCircle },
  { label: "Sign out", icon: LogOut },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("My profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row my-4">
        <div className="md:hidden flex items-center justify-between border-b">
          <h2 className="font-semibold">{activeTab}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <CircleEllipsis className="h-5 w-5" />
          </Button>
        </div>

        <aside
          className={cn(
            "bg-accent border-r md:w-64 md:relative md:translate-x-0 md:flex md:flex-col m-2 rounded-2xl",
            "fixed top-0 left-0 h-full w-64 z-40 transition-transform duration-300 md:m-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex flex-col items-center py-6 border-b">
            <img
              src="/avatar.jpg"
              alt="User avatar"
              className="w-16 h-16 rounded-full"
            />
            <h2 className="mt-2 font-semibold">Michael Williams</h2>
            <p className="text-sm text-muted-foreground">
              m.williams@example.com
            </p>
          </div>

          <nav className="flex flex-col p-4 space-y-1">
            {sidebarItems.map(({ label, icon: Icon }) => (
              <Button
                key={label}
                variant={activeTab === label ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
                onClick={() => {
                  setActiveTab(label);
                  setSidebarOpen(false);
                }}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 mx-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>{activeTab}</CardTitle>
            </CardHeader>
            <CardContent>
              {activeTab === "My profile" && (
                <div>
                  <p className="text-muted-foreground">
                    Profile details will be shown here.
                  </p>
                </div>
              )}
              {activeTab === "Account settings" && (
                <div>
                  <p className="text-muted-foreground">
                    Account settings form goes here.
                  </p>
                </div>
              )}
              {/* Add more tab contents as needed */}
            </CardContent>
          </Card>
        </main>
      </div>
    </Wrapper>
  );
}
