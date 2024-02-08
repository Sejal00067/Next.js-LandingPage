"use client";
import { Builder } from "@builder.io/react";
import { CountdownTimer } from "./components/countdown-timer";
import Counter from "./components/Counter/Counter";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(CountdownTimer, {
  name: "Countdown",
  inputs: [
    {
      name: "currentFramework",
      type: "string",
      required: true,
    },
  ],
});
