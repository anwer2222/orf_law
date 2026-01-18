"use client";

import { Select, SelectContent, SelectGroup, SelectItem,
    SelectLabel, SelectTrigger, SelectValue
 } from "@/components/ui/select";
import { Input } from "./ui/input";
import { Textarea } from './ui/textarea';
import Button from "./Button";
import { useLanguage } from "@/context/LanguageContext";

const Form = () => {
    const { t, dir } = useLanguage();

    return (
        <form className="flex flex-col">
            <div className="flex flex-col gap-5 mb-5">
                <Input type="text" placeholder={t.contact.form.name} required className="bg-background" />
                <Input type="email" placeholder={t.contact.form.email} required className="bg-background"/>
                <div className="flex flex-col xl:flex-row gap-5" >
                  <Input type="tel" placeholder={t.contact.form.phone} className="bg-background"/>
                  
                  <Select dir={dir}>
                    <SelectTrigger className="w-full rounded-none h-13.5 text-muted-foreground outline-none bg-background border-input text-start">
                        <SelectValue placeholder={t.contact.form.service_placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>{t.contact.form.service_label}</SelectLabel>
                            <SelectItem value="consultation">{t.contact.form.services.consultation}</SelectItem>
                            <SelectItem value="litigation">{t.contact.form.services.litigation}</SelectItem>
                            <SelectItem value="arbitration">{t.contact.form.services.arbitration}</SelectItem>
                            <SelectItem value="corporate">{t.contact.form.services.corporate}</SelectItem>
                            <SelectItem value="contracts">{t.contact.form.services.contracts}</SelectItem>
                            <SelectItem value="other">{t.contact.form.services.other}</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <Textarea 
                    className="h-45 resize-none rounded-none bg-background p-4 text-start" 
                    placeholder={t.contact.form.message_placeholder}
                />
                <Button text={t.contact.form.cta} dir={dir}/>
            </div>
        </form>
    );
};

export default Form;