import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "dialog",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dialog", "lucide-react"],
    files: ["ui/dialog.tsx"],
  },
];
