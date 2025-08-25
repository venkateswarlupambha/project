export const getCategoryColor = (category: string) => {
  const colors = {
    Management: "from-pink-500 to-rose-500",
    Automation: "from-pink-500 to-rose-500",
    Campaigns: "from-pink-500 to-rose-500",
    Design: "from-pink-500 to-rose-500",
    Strategy: "from-pink-500 to-rose-500",
    Optimization: "from-pink-500 to-rose-500",
    Setup: "from-pink-500 to-rose-500",
    Advertising: "from-pink-500 to-rose-500"
  };
  return colors[category] || "from-pink-500 to-rose-500";
};

export const getCategoryBadgeColor = (category: string) => {
  const colors = {
    Management: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Automation: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Campaigns: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Design: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Strategy: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Optimization: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Setup: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Advertising: "bg-pink-500/20 text-pink-400 border-pink-500/30"
  };
  return colors[category] || "bg-pink-500/20 text-pink-400 border-pink-500/30";
};