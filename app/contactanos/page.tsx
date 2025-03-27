"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import React from "react";

const formSchema = z.object({
  nombre: z.string().min(3, {
    message: "El nombre debe tener al menos 3 caracteres",
  }).max(50, {
    message: "El nombre no puede tener más de 50 caracteres",
  }),
  apellidos: z.string().min(1, {
    message: "Los apellidos deben tener al menos 1 caracteres",
  }).max(50, {
    message: "Los apellidos no pueden tener más de 50 caracteres",
  }),
  email: z.string().email({
    message: "El email especificado no es válido",
  }),
  mensaje: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres",
  }).max(500, {
    message: "El mensaje no puede tener más de 500 caracteres",
  }),

})

export default function Contactanos() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellidos: "",
      email: "",
      mensaje: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <div className="bg-blue-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div>
      <h1 className="text-6xl font-bold">Contactanos</h1>
    </div>
    <div className="w-98 p-5 bg-white border-zinc-500 border-2 rounded-md justify-items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="justify-center text-lg font-semibold">Nombre</FormLabel>
                <FormControl className="border-1 border-zinc-400 rounded-md p-2">
                  <input placeholder="Nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
            <FormField
              control={form.control}
              name="apellidos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="justify-center text-lg font-semibold">Apellidos</FormLabel>
                  <FormControl className="border-1 border-zinc-400 rounded-md p-2">
                    <input placeholder="Apellidos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="justify-center text-lg font-semibold">Email</FormLabel>
                  <FormControl className="border-1 border-zinc-400 rounded-md p-2">
                    <input placeholder="you@example.com"  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mensaje"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="justify-center text-lg font-semibold">Mensaje</FormLabel>
                  <FormControl className="border-1 border-zinc-400 rounded-md p-2">
                    <textarea placeholder="Mensaje" className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <Button type="submit" className="w-64">Enviar</Button>
        </form>
      </Form>
    </div>
    </div>
  );
}
