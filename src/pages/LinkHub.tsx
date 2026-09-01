import { trpc } from "@/providers/trpc";
import { Link } from "react-router";
import {
  Instagram, MapPin, Utensils, Bike, Calendar, Phone,
  ExternalLink
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Instagram: <Instagram className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  Bike: <Bike className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
  Phone: <Phone className="w-6 h-6" />,
};

export default function LinkHub() {
  const { data: links, isLoading } = trpc.linkHub.list.useQuery();

  return (
    <div className="pt-24 min-h-screen">
      <section className="section-padding py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-[var(--color-chocolate)] flex items-center justify-center text-white mx-auto mb-4">
              <span className="font-display text-2xl">E</span>
            </div>
            <h1 className="font-display text-3xl text-[var(--color-chocolate)] mb-2">The Demo Restaurant</h1>
            <p className="text-sm text-[var(--color-dusty-rose)]">State's First Ode to Croissants</p>
          </div>

          {isLoading ? (
            <div className="flex flex-col gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-16 bg-white rounded-2xl animate-pulse shadow-sm" />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {links?.map((link) => {
                const isExternal = link.url.startsWith("http");
                const Component = isExternal ? "a" : Link;
                const props = isExternal
                  ? { href: link.url, target: "_blank", rel: "noopener noreferrer" }
                  : { to: link.url };

                return (
                  <Component
                    key={link.id}
                    {...(props as any)}
                    className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-chocolate)]/5 flex items-center justify-center text-[var(--color-chocolate)] group-hover:bg-[var(--color-chocolate)] group-hover:text-white transition-all">
                      {iconMap[link.icon] || <ExternalLink className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-medium text-[var(--color-chocolate)]">{link.title}</h3>
                      <p className="text-xs text-[var(--color-dusty-rose)]">{link.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[var(--color-dusty-rose)] group-hover:text-[var(--color-chocolate)] transition-colors" />
                  </Component>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
