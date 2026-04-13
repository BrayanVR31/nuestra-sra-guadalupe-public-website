import { describe, it, expect } from "vitest";
import dayjs, { isValidTimestamp } from "@/libs/dayjs";

describe("dayjs local configurations", () => {
  it("should invalidate yesterday's cache if it's now past 08:30 AM today", () => {
    // Simulation of stale or yesterday date
    const lastFetchedAt = dayjs().subtract(1, "day").hour(14).minute(30).valueOf();
    const isTheSame = isValidTimestamp(lastFetchedAt, [8, 45, 0]);
    expect(isTheSame).toBeFalsy();
  });
});