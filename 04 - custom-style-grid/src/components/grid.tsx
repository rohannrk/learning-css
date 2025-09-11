import { cn } from "@/lib/utils";
import React from "react";
import { BrainIcon, ForkIcon, MouseBoxIcon } from "./icons";

const MainSkeleton = () => {
  const chat = [
    {
      role: "user",
      text: "hello there",
    },
    {
      role: "assistant",
      text: "hello there! How can I help you today?",
    },
    {
      role: "user",
      text: "I want to create a new workflow",
    },
    {
      role: "assistant",
      text: "Sure, I can help you with that. What would you like to build?",
    },
  ];

  const UserMessage = ({ text }: { text: string }) => {
    return (
      <div className="w-fit ml-auto flex justify-end items-start gap-2 bg-blue-500 rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-lg p-2">
        <p className="text-sm text-white">{text}</p>
        <div className="rounded-full size-6 bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>
    );
  };
  const AIMessage = ({ text }: { text: string }) => {
    return (
      <div className="flex w-fit mr-auto justify-start items-start gap-2 bg-gray-100 rounded-tr-full rounded-tl-full rounded-bl-lg rounded-br-full  p-2">
        <div className="rounded-full size-6 shrink-0 bg-gradient-to-r from-green-500 to-emerald-500" />
        <p className="text-sm text-black">{text}</p>
      </div>
    );
  };
  return (
    <div className="h-full relative w-full px-12  flex flex-col gap-4 z-20">
      <input
        type="text"
        placeholder="Type your message here..."
        className="w-[calc(100%-4rem)] h-10 bg-white border border-neutral-200 mx-auto  absolute bottom-4 inset-x-0 px-4 text-xs rounded-md placeholder-neutral-600"
      />
      {chat.map((message, index) => {
        return message.role === "user" ? (
          <UserMessage text={message.text} />
        ) : (
          <AIMessage text={message.text} />
        );
      })}
    </div>
  );
};

export const Grid = () => {
  return (
    <div className="max-w-5xl py-20 mx-auto border-x border-neutral-200 bg-gray-100 min-h-screen ">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-y divide-neutral-100">
        <Card>
          <CardHeader>
            <BrainIcon />
            <CardTitle>LLM Model Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>

        <Card>
          <CardHeader>
            <MouseBoxIcon />
            <CardTitle>Text to workflow builder</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton className="bg-white">
            <MainSkeleton />
          </CardSkeleton>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <ForkIcon />
            <CardTitle>Native tools integration</CardTitle>
          </CardHeader>
          <CardDescription>
            Integrate with native tools to create workflows that can interact
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>
      </div>
    </div>
  );
};

const CardSkeleton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      style={{}}
      className={cn(
        "h-60 bg-gray-50 w-full my-4 rounded-lg overflow-hidden",
        "bg-[radial-gradient(var(--color-neutral-100)_1px,_transparent_1px)]",
        "[background-size:10px_10px]",
        "mask-radial-from-40%",
        className
      )}
    >
      {children}
    </div>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("bg-white p-4 w-full", className)}>{children}</div>;
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("font-medium text-lg tracking-tight", className)}>
      {children}
    </h2>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-base text-neutral-400", className)}>{children}</p>
  );
};