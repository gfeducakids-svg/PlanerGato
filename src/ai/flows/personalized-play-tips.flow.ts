'use server';

/**
 * @fileOverview A Genkit flow for generating personalized play tips for cats based on their breed, age, and preferences.
 *
 * - generatePersonalizedPlayTips - A function that generates personalized play tips for cats.
 * - PersonalizedPlayTipsInput - The input type for the generatePersonalizedPlayTips function.
 * - PersonalizedPlayTipsOutput - The return type for the generatePersonalizedPlayTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedPlayTipsInputSchema = z.object({
  breed: z.string().describe('The breed of the cat.'),
  age: z.number().describe('The age of the cat in years.'),
  preferences: z.string().describe('The cat\u2019s play preferences (e.g., toys, activities).'),
});
export type PersonalizedPlayTipsInput = z.infer<typeof PersonalizedPlayTipsInputSchema>;

const PersonalizedPlayTipsOutputSchema = z.object({
  playTips: z.string().describe('Personalized play tips for the cat.'),
});
export type PersonalizedPlayTipsOutput = z.infer<typeof PersonalizedPlayTipsOutputSchema>;

export async function generatePersonalizedPlayTips(
  input: PersonalizedPlayTipsInput
): Promise<PersonalizedPlayTipsOutput> {
  return personalizedPlayTipsFlow(input);
}

const personalizedPlayTipsPrompt = ai.definePrompt({
  name: 'personalizedPlayTipsPrompt',
  input: {schema: PersonalizedPlayTipsInputSchema},
  output: {schema: PersonalizedPlayTipsOutputSchema},
  prompt: `You are an expert cat behaviorist. Generate personalized play tips for a cat based on the following information:\n\nBreed: {{{breed}}}\nAge: {{{age}}}\nPreferences: {{{preferences}}}\n\nProvide play tips that are tailored to the cat's breed, age, and preferences to optimize their playtime enjoyment.`,
});

const personalizedPlayTipsFlow = ai.defineFlow(
  {
    name: 'personalizedPlayTipsFlow',
    inputSchema: PersonalizedPlayTipsInputSchema,
    outputSchema: PersonalizedPlayTipsOutputSchema,
  },
  async input => {
    const {output} = await personalizedPlayTipsPrompt(input);
    return output!;
  }
);
