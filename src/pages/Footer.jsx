import { useState, useEffect } from "react";

export default function Footer() {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showImage ? "hidden" : "auto";
    }, [showImage]);

    return (
        <>
            {/* FOOTER */}
            <footer
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "48px",
                    background: "#0f172a",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 16px",
                    boxSizing: "border-box",
                }}
            >
                <p style={{ margin: 0, fontSize: "14px" }}>
                    Learn Sign Language
                </p>

                <button
                    onClick={() => setShowImage(true)}
                    style={{
                        padding: "6px 12px",
                        background: "#22c55e",
                        border: "none",
                        borderRadius: "6px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "13px",
                    }}
                >
                    View Hand Gesture Chart
                </button>
            </footer>

            {/* IMAGE MODAL */}
            {showImage && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.7)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            background: "white",
                            padding: "16px",
                            maxWidth: "900px",
                            width: "90%",
                            borderRadius: "12px",
                            position: "relative",
                            maxHeight: "90vh",
                            overflow: "hidden",
                            textAlign: "center",
                        }}
                    >
                        <span
                            onClick={() => setShowImage(false)}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "14px",
                                cursor: "pointer",
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "black",
                            }}
                        >
                            ✖
                        </span>

                        <h3 style={{ marginTop: "8px" }}>
                            Sign Language Alphabet Chart
                        </h3>

                        <img
                            src="/gestures/alphabet-chart.png"
                            alt="Sign language alphabet hand gestures"
                            style={{
                                marginTop: "12px",
                                maxWidth: "100%",
                                maxHeight: "75vh",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
