import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { TextField } from "@mui/material";

export default function SearchBar() {
  return (
    <div className="relative p-2 max-w-md mx-auto">
      <MagnifyingGlassIcon className="absolute left-4 mt-1 ml-0.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
      <TextField 
        id="outlined-basic" 
        // label="Search anything" 
        aria-label="Search Bar"
        variant="outlined" 
        placeholder="Search..." 
        className="w-200 h-12 px-4 border rounded-full focus:outline-none focus:ring-1 focus:ring-[#4F772D] pl-10"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '300px',
            paddingLeft: '25px', // 🔹 アイコン分の余白を確保
            '& fieldset': { borderColor: '#4F772D', borderWidth: '1px' },
            '&:hover fieldset': { borderColor: '#4F772D', borderWidth: '2px' },
            '&.Mui-focused fieldset': { borderColor: '#4F772D', borderWidth: '2px' }
          },
          '& .MuiInputLabel-root.Mui-focused': { color: '#4F772D' }
        }}
      />
    </div>
  );
}
