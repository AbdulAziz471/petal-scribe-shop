export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-lg mb-2">Gifted And Co</h3>
          <p className="text-sm text-muted-foreground">
            Elegant, handcrafted bouquets inspired by nature’s calm and beauty.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Customer Care</h4>
          <ul className="space-y-1 text-sm">
            <li><a className="story-link" href="#">Shipping & Delivery</a></li>
            <li><a className="story-link" href="#">Care Guide</a></li>
            <li><a className="story-link" href="#">Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Sign up for seasonal drops and floral tips.</p>
          <form className="flex gap-2">
            <input aria-label="Email" placeholder="Your email" className="flex-1 rounded-md border bg-background px-3 py-2" />
            <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-95 transition-opacity" type="button">Join</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto pb-8 text-xs text-muted-foreground">© {new Date().getFullYear()} Gifted And Co. All rights reserved.</div>
    </footer>
  );
}
