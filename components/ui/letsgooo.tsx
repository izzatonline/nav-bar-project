import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Letsgooo = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="px-2 py-1 bg-white font-semibold rounded-md">Letsgooo!!!</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href="/login" className="w-full">Log In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/signup" className="w-full">Sign Up</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Letsgooo