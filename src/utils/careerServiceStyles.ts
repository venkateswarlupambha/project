
export const getCategoryColor = (category: string) => {
  const colors = {
    Professional: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Enhancement: "bg-green-500/20 text-green-400 border-green-500/30",
    Social: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Platform: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    Technical: "bg-red-500/20 text-red-400 border-red-500/30",
    Consultation: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    Tools: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Preparation: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Portfolio: "bg-teal-500/20 text-teal-400 border-teal-500/30",
    Video: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
  };
  return colors[category] || colors.Professional;
};
