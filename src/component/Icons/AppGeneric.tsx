import { SvgIcon, SvgIconProps } from "@mui/material";

export default function AppGeneric(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v.25h15v-.25a1.75 1.75 0 0 0-1.75-1.75zM4.5 17.75c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V8h-15zM6.85 9.5h3.3c.47 0 .85.38.85.85v6.8c0 .47-.38.85-.85.85h-3.3a.85.85 0 0 1-.85-.85v-6.8c0-.47.38-.85.85-.85m.65 7h2V11h-2zm4.5-6.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z" />
    </SvgIcon>
  );
}
