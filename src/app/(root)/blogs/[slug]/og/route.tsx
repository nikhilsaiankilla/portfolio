import { ImageResponse } from "next/og";
import { getBlogById } from "@/src/lib/blogs";

export const runtime = "edge";

export async function GET(
    _: Request,
    { params }: { params: { slug: string } }
) {
    const blog = getBlogById(params.slug);

    if (!blog || !blog.isPublished) {
        return new ImageResponse(
            (
                <div
                    style={{
                        width: "1200px",
                        height: "630px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#ffffff",
                    }}
                >
                    <div
                        style={{
                            fontSize: 88,
                            fontWeight: 900,
                            lineHeight: 1,
                            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
                            color: "#000000",
                        }}
                    >
                        Nikhil sai.
                    </div>

                    <div
                        style={{
                            marginTop: 20,
                            fontSize: 36,
                            fontWeight: 600,
                            letterSpacing: "0.02em",
                            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
                            color: "#000000",
                        }}
                    >
                        Blog not found
                    </div>
                </div>
            ),
            { width: 1200, height: 630 }
        );
    }

    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    backgroundColor: "#ffffff",
                }}
            >
                <h1
                    style={{
                        fontSize: 64,
                        fontWeight: 900,
                        lineHeight: 1.15,
                        maxWidth: "1000px",
                        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
                        color: "#000000",
                    }}
                >
                    {blog.title}
                </h1>

                <p
                    style={{
                        marginTop: 28,
                        fontSize: 32,
                        fontWeight: 500,
                        maxWidth: "900px",
                        color: "#4B5563",
                        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
                    }}
                >
                    {blog.description}
                </p>

                <span
                    style={{
                        position: "absolute",
                        bottom: 60,
                        left: 80,
                        fontSize: 24,
                        fontWeight: 600,
                        opacity: 0.8,
                        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
                    }}
                >
                    nikhilsai.in
                </span>
            </div>
        ),
        { width: 1200, height: 630 }
    );
}
