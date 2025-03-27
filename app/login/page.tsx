"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"

import React from "react";

const formSchema = z.object({
  mail: z.string().email({
    message: "El email especificado no es válido",
  }),
  contrasena: z.string().nonempty({
    message: "Introduzca una contraseña"
  })
  .min(8, {
    message: "La n debe de ser mas larga de 8 caracteres."
  }).max(50, {
    message: "La contraseña no puede execer los 50 caracteres."
  })
})

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      mail: "",
      contrasena: "",
    }
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }
  
  return (
    <div className="bg-blue-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-center h">
        <h1 className="text-6xl font-bold">Iniciar sesión</h1> 
      </div>
      <div className="w-98 p-5 bg-white border-zinc-500 border-2 rounded-md justify-items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField control={form.control} name="mail" render={({ field }) => (
              <FormItem>
                <FormLabel className="justify-center text-lg font-semibold">Correo</FormLabel>
                <FormControl className="border-1 border-zinc-400 rounded-md p-2">
                  <input placeholder="you@example.com" {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
            <FormField control={form.control} name="contrasena" render={({ field }) => (
              <FormItem>
                <FormLabel className="justify-center text-lg font-semibold">Contraseña</FormLabel>
                <FormControl className="border-1 border-zinc-400 rounded-md p-2">
                  <input type="password" placeholder="Contraseña" {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
            <Button type="submit" className="w-64">Iniciar sesión</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
