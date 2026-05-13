import * as React from "react";
import { cn } from "@heeh-ui/utils";

export function Carousel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-carousel", className)} {...props} />;
}

export function Gallery({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("heeh-gallery", className)} {...props} />;
}

export function VideoPlayer({ className, ...props }: React.VideoHTMLAttributes<HTMLVideoElement>) {
  return <video controls className={cn("heeh-video-player", className)} {...props} />;
}

export function AudioPlayer({ className, ...props }: React.AudioHTMLAttributes<HTMLAudioElement>) {
  return <audio controls className={cn("heeh-audio-player", className)} {...props} />;
}

export function Lightbox({ open, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { open?: boolean }) {
  return open ? <div className={cn("heeh-lightbox", className)} {...props} /> : null;
}

export function PdfViewer({ className, ...props }: React.IframeHTMLAttributes<HTMLIFrameElement>) {
  return <iframe title={props.title ?? "PDF viewer"} className={cn("heeh-pdf-viewer", className)} {...props} />;
}

export function CodeViewer({ code, className, ...props }: React.HTMLAttributes<HTMLPreElement> & { code: string }) {
  return <pre className={cn("heeh-code-viewer", className)} {...props}><code>{code}</code></pre>;
}

export function MarkdownViewer({ markdown, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { markdown: string }) {
  return <div className={cn("heeh-markdown-viewer", className)} {...props}>{markdown}</div>;
}
