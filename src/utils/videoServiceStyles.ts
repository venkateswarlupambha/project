
export const getCategoryColor = (category: string) => {
  const colors = {
    YouTube: "bg-red-500/20 text-red-400 border-red-500/30",
    Social: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Professional: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Accessibility: "bg-green-500/20 text-green-400 border-green-500/30",
    Effects: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Career: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    Events: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Branding: "bg-orange-500/20 text-orange-400 border-orange-500/30"
  };
  return colors[category] || colors.YouTube;
};

export const getGradientColor = (category: string) => {
  const colors = {
    YouTube: "from-red-500 to-pink-500",
    Social: "from-pink-500 to-purple-500",
    Professional: "from-blue-500 to-indigo-500",
    Accessibility: "from-green-500 to-teal-500",
    Effects: "from-purple-500 to-pink-500",
    Career: "from-indigo-500 to-blue-500",
    Events: "from-yellow-500 to-orange-500",
    Branding: "from-orange-500 to-red-500"
  };
  return colors[category] || colors.YouTube;
};
