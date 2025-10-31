import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Quote() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Motivational Quote</CardTitle>      
      </CardHeader>
      <CardContent>
        <blockquote className="border-l-4 pl-4 italic text-lg">
          "The secret of getting ahead is getting started."
          <footer className="mt-2 text-sm text-muted-foreground">— Mark Twain</footer>
        </blockquote>
      </CardContent>
    </Card>
  );
}
