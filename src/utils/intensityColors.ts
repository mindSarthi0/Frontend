export const getIntensityColor = (intensity: string) => {
  switch (intensity) {
    case 'High':
      return {
        backgroundColor: '#d1fae5', // bg-emerald-100
        color: '#047857' // text-emerald-700
      };
    case 'Average':
      return {
        backgroundColor: '#dbeafe', // bg-blue-100  
        color: '#1d4ed8' // text-blue-700
      };
    case 'Low':
      return {
        backgroundColor: '#ffe4e6', // bg-rose-100
        color: '#be123c' // text-rose-700
      };
    default:
      return {
        backgroundColor: '#f3f4f6', // bg-gray-100
        color: '#374151' // text-gray-700
      };
  }
};


// export const getIntensityColor = (intensity: 'High' | 'Average' | 'Low') => {
//   switch (intensity) {
//     case 'High':
//       return 'bg-emerald-100 text-emerald-700';
//     case 'Average':
//       return 'bg-blue-100 text-blue-700';
//     case 'Low':
//       return 'bg-rose-100 text-rose-700';
//     default:
//       return "bg-gray-100 text-gray-700"; 
//   }
// };
