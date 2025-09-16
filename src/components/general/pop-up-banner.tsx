// "use client"

// import { useState, useEffect } from "react"
// import { X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { getPopupBanner } from "../../../sanity/sanity.query"

// export interface PopupBannerData {
//   active: boolean
//   switchText: string
//   buttonText: string
//   uri: string
//   imageUrl: string
// }

// interface PopupBannerProps {
//   onClose: () => void
//   banner: PopupBannerData | null
// }

// export default function PopupBanner({ onClose, banner }: PopupBannerProps) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false);
//     setTimeout(onClose, 300);
//   };

//   if (!banner || !banner.active) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-4">
//       <div
//         className={`relative w-full max-w-md bg-slate-100 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ${
//           isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
//         }`}
//         style={{ width: "800px", maxWidth: "100%" }}
//       >
//         {/* Close button */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="absolute right-2 top-2 z-10 text-black hover:bg-black/10"
//           onClick={handleClose}
//         >
//           <X className="h-5 w-5" />
//           <span className="sr-only">Close</span>
//         </Button>
//         {/* Banner Image */}
//         <img
//           src={banner.imageUrl}
//           alt="Special Offer"
//           width={400}
//           height={400}
//           className="block w-full h-auto"
//           style={{ display: "block" }}
//         />
//         {/* Book Now Button at the bottom */}
//         <div className="flex items-center justify-center p-4">
//           <Link href={banner.uri} target="_blank" rel="noopener noreferrer">
//             <Button size="lg" >
//               {banner.buttonText}
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
