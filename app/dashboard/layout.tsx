"use client"

import React from "react";
import DashboardLayout from "@/app/lib/ui/layouts/dashboard";

export default function Layout({ children }: { children?: React.ReactNode }) {
    return <DashboardLayout>{children}</DashboardLayout>;
};