'use client'

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input"
import { SearchIcon } from "lucide-react";

const Search = () => {
   return (
      <div className="flex items-center gap-2">
         <Input placeholder="Busque por uma barbearia..." className="w-full" />
         <Button variant="default" size="icon"><SearchIcon size={20} /></Button>
      </div>
   );
}

export default Search;