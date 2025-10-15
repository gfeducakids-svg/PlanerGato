'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { generatePersonalizedPlayTips } from '@/ai/flows/personalized-play-tips.flow';
import { useState } from 'react';
import { WandSparkles, LoaderCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  breed: z.string().min(2, 'Por favor, insira uma raça válida.'),
  age: z.coerce.number().min(0, 'A idade não pode ser negativa.').max(30, 'Insira uma idade realista.'),
  preferences: z.string().min(5, 'Descreva as preferências em pelo menos 5 caracteres.'),
});

type FormValues = z.infer<typeof FormSchema>;

export function PersonalizedTipsSection() {
  const [loading, setLoading] = useState(false);
  const [playTips, setPlayTips] = useState('');
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      breed: '',
      age: 1,
      preferences: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    setPlayTips('');
    try {
      const result = await generatePersonalizedPlayTips(data);
      setPlayTips(result.playTips);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Ops! Algo deu errado.',
        description: 'Não foi possível gerar as dicas. Tente novamente.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <span className="font-highlight text-primary">Ferramenta IA</span>
            <h2 className="text-3xl md:text-4xl font-headline">Dicas de Brincadeira Personalizadas</h2>
            <p className="text-lg text-muted-foreground">
              Use nossa ferramenta com inteligência artificial para gerar dicas de brincadeiras perfeitamente adaptadas ao seu gato. Preencha os detalhes abaixo e veja a mágica acontecer!
            </p>
            <Card>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="breed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Raça do Gato</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Siamês, Vira-lata" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Idade (anos)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Ex: 3" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="preferences"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferências de Brinquedo/Atividade</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Bolinhas de papel, perseguir laser" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90">
                      {loading ? (
                        <>
                          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                          Gerando...
                        </>
                      ) : (
                        <>
                          <WandSparkles className="mr-2 h-4 w-4" />
                          Gerar Dicas Personalizadas
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="lg:mt-16">
            <Card className={`transition-opacity duration-500 ${playTips || loading ? 'opacity-100' : 'opacity-50'}`}>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <WandSparkles className="text-secondary" />
                        <span>Suas Dicas Mágicas</span>
                    </CardTitle>
                    <CardDescription>Aqui estão algumas ideias para começar a brincar!</CardDescription>
                </CardHeader>
                <CardContent className="min-h-[200px]">
                    {loading && (
                        <div className="flex flex-col items-center justify-center text-center text-muted-foreground space-y-2">
                            <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
                            <p>Nossos especialistas felinos estão pensando...</p>
                        </div>
                    )}
                    {playTips && (
                        <div className="prose prose-sm max-w-none text-foreground">
                            <p>{playTips}</p>
                        </div>
                    )}
                    {!loading && !playTips && (
                         <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-full pt-8">
                            <p>Suas dicas personalizadas aparecerão aqui.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
