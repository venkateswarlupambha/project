
export const getCategoryColor = (category: string) => {
  const colors = {
    Photo: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Retouching: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Profile: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Branding: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    Business: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Marketing: "bg-red-500/20 text-red-400 border-red-500/30",
    Events: "bg-rose-500/20 text-rose-400 border-rose-500/30"
  };
  return colors[category] || colors.Photo;
};

export const getGradientColor = (category: string) => {
  const colors = {
    Photo: "from-emerald-500 to-teal-500",
    Retouching: "from-pink-500 to-rose-500",
    Profile: "from-purple-500 to-indigo-500",
    Branding: "from-orange-500 to-red-500",
    Business: "from-blue-500 to-indigo-500",
    Marketing: "from-red-500 to-pink-500",
    Events: "from-rose-500 to-pink-500"
  };
  return colors[category] || colors.Photo;
};
