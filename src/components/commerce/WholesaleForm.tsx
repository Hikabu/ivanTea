"use client";

import { Locale } from "@/lib/i18n";
import { FormEvent, useState } from "react";

export function WholesaleForm({ locale }: { locale: Locale }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  if (sent) return <div className="wholesale-success"><span>✓</span><h3>{locale === "ru" ? "Запрос получен" : "Request received"}</h3><p>{locale === "ru" ? "Команда Fedorov Tea ответит на указанный адрес и уточнит объём, рынок и формат образцов." : "The Fedorov Tea team will reply at the address provided and confirm volume, market and sample format."}</p></div>;
  return <form className="wholesale-form" onSubmit={submit}><div><label>{locale === "ru" ? "Имя" : "Name"}<input name="name" required/></label><label>{locale === "ru" ? "Компания" : "Company"}<input name="company" required/></label></div><div><label>Email<input name="email" type="email" required/></label><label>{locale === "ru" ? "Страна / рынок" : "Country / market"}<input name="market" required/></label></div><label>{locale === "ru" ? "Что вас интересует" : "What do you need?"}<select name="request" defaultValue=""><option value="" disabled>{locale === "ru" ? "Выберите формат" : "Select a format"}</option><option>{locale === "ru" ? "Розничная линейка" : "Retail-ready collection"}</option><option>{locale === "ru" ? "Чай без розничной упаковки" : "Bulk tea without retail packaging"}</option><option>{locale === "ru" ? "Корпоративные подарки" : "Corporate gifts"}</option><option>{locale === "ru" ? "Дистрибьюция" : "Distribution"}</option></select></label><label>{locale === "ru" ? "Ожидаемый объём и детали" : "Expected volume and details"}<textarea name="message" rows={5} required/></label><button className="button button--primary" type="submit">{locale === "ru" ? "ОТПРАВИТЬ ЗАПРОС" : "SEND PARTNERSHIP REQUEST"}</button><p>{locale === "ru" ? "Или напишите напрямую: partners@fedorovtea.com" : "Or write directly: partners@fedorovtea.com"}</p></form>;
}
