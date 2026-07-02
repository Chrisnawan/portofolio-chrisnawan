import Reveal from './Reveal';
import SplitReveal from './SplitReveal';
import ProjectCard from './ProjectCard';

export default function Projects({ proyek }) {
  const single = proyek.length === 1;

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Proyek</Reveal>
        <SplitReveal as="h2" className="section-title" text="Karya & proyek." />
        <Reveal as="p" className="section-sub">
          Proyek yang saya bangun — dikelola melalui panel admin dan tersimpan di database.
        </Reveal>

        {proyek.length > 0 ? (
          <Reveal as="div" className={`projects-grid${single ? ' single' : ''}`} stagger>
            {proyek.map((p) => (
              <ProjectCard key={p.id} proyek={p} />
            ))}
          </Reveal>
        ) : (
          <Reveal as="div" className="empty-projects">
            // Belum ada proyek. Tambahkan lewat panel admin.
          </Reveal>
        )}
      </div>
    </section>
  );
}
