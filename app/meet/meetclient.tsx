"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ================= BASE TIMEZONE ================= */
/* Pacific Time (USA) — schedule is written in this */
const PACIFIC_OFFSET = -7; // PDT (summer). Change to -8 for PST winter.

/* ================= TIMEZONES ================= */
const TIMEZONES = [
  { label: "Pacific Time (PT) GMT-7", offset: -7 },
  { label: "Mountain Time (MT) GMT-6", offset: -6 },
  { label: "Central Time (CT) GMT-5", offset: -5 },
  { label: "Eastern Time (ET) GMT-4", offset: -4 },
  { label: "Alaska Time (AKT) GMT-8", offset: -8 },
  { label: "Hawaii Time (HST) GMT-10", offset: -10 },
  { label: "Moscow Time (MSK) GMT+3", offset: 3 },
  { label: "Finland Time (EEST) GMT+3", offset: 3 },
  { label: "India Time (IST) GMT+5:30", offset: 5.5 },
  { label: "Nepal Time (NPT) GMT+5:45", offset: 5.75 },
  { label: "China Time (CST) GMT+8", offset: 8 },
  { label: "Sydney Time (AEST) GMT+10", offset: 10 },
];

/* ================= TIME CONVERTER ================= */
const convertTime = (
  timeRange: string,
  fromOffset: number,
  toOffset: number
) => {
  const diff = toOffset - fromOffset;

  return timeRange.replace(
    /(\d{1,2}):(\d{2})/g,
    (_, h, m) => {
      let hour = parseInt(h, 10);
      const minute = parseInt(m, 10);

      const totalMinutes = hour * 60 + minute + diff * 60;

      let newHour = Math.floor(((totalMinutes % 1440) + 1440) % 1440 / 60);
      let newMinute = ((totalMinutes % 60) + 60) % 60;

      return `${String(newHour).padStart(2, "0")}:${String(newMinute).padStart(2, "0")}`;
    }
  );
};

export default function MeetClient() {
  const [selectedTZ, setSelectedTZ] = useState(TIMEZONES[0]);

  const fullSchedule: {
    [day: string]: { time: string; title: string; link: string }[];
  } = {
    "Virtual Meetings - Pacific Time (USA) (Buffer Time : 15 Minutes)": [
      { time: "02:15 – 05:15", title: "Internship Slot 1 - (Mon-Fri)", link: "https://b.broadpress.org/meet" },
      { time: "06:15 – 09:15", title: "Internship Slot 2 - (Mon-Fri)", link: "https://b.broadpress.org/meet" },
      { time: "11:15 – 14:15", title: "Internship Slot 3 - (Mon-Fri)", link: "https://meet.google.com/vsb-buwu-pub" },
      { time: "15:15 – 18:15", title: "Internship Slot 4 - (Mon-Fri)", link: "https://b.broadpress.org/meet" },
      { time: "19:15 – 22:15", title: "Internship Slot 5 - (Mon-Fri)", link: "https://b.broadpress.org/meet" },
      { time: "06:15 – 07:00", title: "#TechFriday - (Fri)", link: "https://b.broadpress.org/meet" },
      { time: "06:15 – 09:15", title: "BroadPress Interview - (Mon-Fri)", link: "https://b.broadpress.org/meet" },
      { time: "07:15 – 08:00", title: "Community Meeting - (Fri)", link: "https://b.broadpress.org/meet" },
    ],
  };

  return (
    <section className="max-w-[1180px] mx-auto px-6 lg:px-0 mb-[45px] mt-[45px] w-full flex flex-col gap-6">
      {Object.entries(fullSchedule).map(([day, sessions]) => (
        <div
          key={day}
          className="relative w-full bg-white border border-gray-200 rounded-[15px] shadow p-4 mt-12"
        >
          {/* TIMEZONE DROPDOWN */}
          <div className="absolute top-10 right-10 z-10">
            <select
              value={selectedTZ.label}
              onChange={(e) =>
                setSelectedTZ(
                  TIMEZONES.find((tz) => tz.label === e.target.value)!
                )
              }
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
            >
              {TIMEZONES.map((tz) => (
                <option key={tz.label} value={tz.label}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-start flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <Image
              src="/meet/meet.webp"
              width={250}
              height={250}
              alt={day}
              className="rounded-[12px] border border-gray-400"
            />
            <h2 className="text-xl font-bold">
              Virtual Meetings – {selectedTZ.label}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sessions.map((session, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b py-2"
              >
                <div>
                  <p className="font-semibold">{session.title}</p>
                  <p className="text-sm text-gray-500">
                    {convertTime(session.time, PACIFIC_OFFSET, selectedTZ.offset)}
                  </p>
                </div>

                <Link
                  href={session.link}
                  target="_blank"
                  className="px-3 py-1 text-sm border border-[#055D59] text-[#055D59] hover:bg-[#055D59] hover:text-white rounded-[8px] transition"
                >
                  Join
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}

      <p className="max-w-[95%] mx-auto text-center mb-[45px]">
        Meeting Rules : All participants must use a professional headshot and
        display their real name as per their government ID. Keep your microphone
        muted unless invited to speak.
      </p>

      <p className="max-w-[95%] mx-auto text-center mb-[45px]">
        Effective From : 15 March 2026
      </p>
    </section>
  );
}