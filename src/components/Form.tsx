"use client";

import { Select, SelectContent, SelectGroup, SelectItem,
    SelectLabel, SelectTrigger, SelectValue
 } from "@/components/ui/select";

import { Input } from "./ui/input";
import { Textarea } from './ui/textarea';
import Button from "./Button";

const Form = () => {
    return (
        <form className="flex flex-col">
            <div className="flex flex-col gap-5 mb-5">
                <Input type="text" placeholder="Full Name" required className="bg-background" />
                <Input type="email" placeholder="Email Address" required className="bg-background"/>
                <div className="flex flex-col xl:flex-row gap-5" >
                  <Input type="tel" placeholder="Phone Number" className="bg-background"/>
                  
                  {/* Service Selection */}
                  <Select>
                    <SelectTrigger className="w-full rounded-none h-13.5 text-muted-foreground outline-none bg-background border-input">
                        <SelectValue placeholder="Type of Legal Service" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Legal Services</SelectLabel>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                            <SelectItem value="litigation">Litigation & Courts</SelectItem>
                            <SelectItem value="arbitration">Arbitration & Dispute Resolution</SelectItem>
                            <SelectItem value="corporate">Corporate & Commercial</SelectItem>
                            <SelectItem value="contracts">Contract Drafting</SelectItem>
                            <SelectItem value="other">Other Inquiry</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                {/* textarea */}
                <Textarea 
                    className="h-45 resize-none rounded-none bg-background p-4" 
                    placeholder="Briefly describe your legal matter (Confidential)..."
                />
                {/* btn */}
                <Button text="Submit Request"/>
            </div>
        </form>
    )
}

export default Form