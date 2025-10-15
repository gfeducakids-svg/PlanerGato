
export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="border-t border-gray-700 py-4">
          <p className="text-center text-sm text-gray-400">© {new Date().getFullYear()} Purrfect Play Planner. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
