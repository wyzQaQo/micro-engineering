import { redirect } from "next/navigation";

// Redirect the root path to the default locale
export default function RootPage() {
  redirect("/en");
}
