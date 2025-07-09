import { useEffect, useState } from "react"; // 👈 React hooks used for side-effects & state

// ⭐ StarBackground component shows animated stars + meteor effects
export const StarBackground = () => {
  const [stars, setStars] = useState([]); // 🌟 Array of all stars
  const [meteors, setMeteors] = useState([]); // ☄️ Array of all meteors

  useEffect(() => {
    generateStars();     // ⭐ Create stars initially
    generateMeteors();   // ☄️ Create meteors initially

    const handleResize = () => {
      generateStars();   // 📏 Window resize par stars regenerate
    };

    window.addEventListener("resize", handleResize); // ✅ Resize listener

    return () => window.removeEventListener("resize", handleResize); // 🧹 Cleanup
  }, []);

  // 🛠 Function to create star objects with random positions and sizes
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000 // 📐 Screen area ke basis par count
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,         // 📏 Star size
        x: Math.random() * 100,              // 📍 X position (%)
        y: Math.random() * 100,              // 📍 Y position (%)
        opacity: Math.random() * 0.5 + 0.5,  // 🌫 Opacity between 0.5–1
        animationDuration: Math.random() * 4 + 2, // 🕒 Pulse duration (2–6s)
      });
    }

    setStars(newStars); // 💾 Store in state
  };

  // 🛠 Function to create meteor streaks
  const generateMeteors = () => {
    const numberOfMeteors = 10; // ☄️ Kitne meteors dikhane hain
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,             // 📏 Meteor size factor
        x: Math.random() * 100,                  // 📍 X position (%)
        y: Math.random() * 20,                   // 📍 Y position (only top 20%)
        delay: Math.random() * 15,               // ⏱ Random animation delay
        animationDuration: Math.random() * 3 + 3 // 🕒 3–6s animation
      });
    }

    setMeteors(newMeteors); // 💾 Store meteors in state
  };

  return (
    // 🌌 Container for background effects (no mouse interaction)
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* ⭐ Render stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle" // 🌟 Soft pulsing animation
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* ☄️ Render meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor" // 🌀 Moving meteor animation
          style={{
            width: meteor.size * 50 + "px",       // Long trail
            height: meteor.size * 2 + "px",       // Thin tail
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
