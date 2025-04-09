import { cookies } from "next/headers";
import * as jwt from "jsonwebtoken"; // ✅

import { redirect } from "next/navigation";

export default function DashboardIndex() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/auth/login");
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "supersecreto");

    const role = decoded.role;

    if (role === "ADMIN") redirect("/dashboard/admin");
    if (role === "TEACHER") redirect("/dashboard/docente");
    if (role === "STUDENT") redirect("/dashboard/alumno");
  } catch (error) {
    redirect("/auth/login");
  }

  return null;
}
