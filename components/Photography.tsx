import SectionHeading from "@/components/ui/SectionHeading";
import PhotographyGallery from "@/components/media/PhotographyGallery";
import { photographyItems } from "@/data/photography";
import { site } from "@/data/site";

export default function Photography() {
  return (
    <section id="photography" className="section-container py-28">
      <SectionHeading
        eyebrow="Behind the Lens"
        title="Photography"
        subtitle="A selection of moments, products, and visual details captured through my lens."
      />

      {photographyItems.length === 0 ? (
        <div className="mt-14 rounded-2xl border border-border py-16 text-center">
          <p className="text-base text-secondary">
            Selected photography will be added soon.
          </p>
        </div>
      ) : (
        <PhotographyGallery
          items={photographyItems}
          vscoUrl={site.vscoUrl}
        />
      )}
    </section>
  );
}
