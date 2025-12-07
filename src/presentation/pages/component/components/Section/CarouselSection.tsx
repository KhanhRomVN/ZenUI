import { Carousel } from "../../../../components/package/components/carousel";
import { CodeBlock } from "../../../../components/package/components/codeblock";
import { FileCode, Star, Heart, Zap } from "lucide-react";
import RightPanel from "../RightPanel";

const CarouselSection = () => {
  // Sample data
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      title: "Mountain Landscape",
      description: "Beautiful mountain scenery",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
      title: "Forest Path",
      description: "Peaceful forest trail",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800",
      title: "Ocean Waves",
      description: "Serene ocean view",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800",
      title: "Desert Dunes",
      description: "Golden sand dunes",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800",
      title: "Aurora Lights",
      description: "Northern lights display",
    },
  ];

  const features = [
    {
      id: 1,
      icon: <Zap size={32} />,
      title: "Lightning Fast",
      description: "Optimized performance with smooth 60fps animations",
    },
    {
      id: 2,
      icon: <Heart size={32} />,
      title: "Easy to Use",
      description: "Simple API with extensive customization options",
    },
    {
      id: 3,
      icon: <Star size={32} />,
      title: "Feature Rich",
      description: "Multiple effects, autoplay, touch support, and more",
    },
  ];

  // Navigation sections
  const navigationSections = [
    { id: "about", label: "About" },
    { id: "install", label: "Install" },
    { id: "usage", label: "Usage" },
    { id: "examples", label: "Examples" },
    { id: "props", label: "Props" },
  ];

  const npmInstallCode = `npm install @khanhromvn/zenui`;
  const yarnInstallCode = `yarn add @khanhromvn/zenui`;

  const basicUsageCode = `import { Carousel, CarouselItem } from "@khanhromvn/zenui";

function MyComponent() {
  const slides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
  ];

  return (
    <Carousel
      items={slides}
      renderItem={(item) => (
        <div className="w-full h-64 flex items-center justify-center bg-blue-500 text-white text-2xl rounded-lg">
          {item.content}
        </div>
      )}
    />
  );
}`;

  const autoplayCode = `import { Carousel } from "@khanhromvn/zenui";

function AutoplayExample() {
  return (
    <Carousel
      items={slides}
      renderItem={(item) => <SlideContent item={item} />}
      autoplay={true}
      autoplayDelay={3000}
      pauseOnHover={true}
      loop={true}
    />
  );
}`;

  const effectsCode = `import { Carousel } from "@khanhromvn/zenui";

function EffectsExample() {
  return (
    <>
      {/* Slide Effect (Default) */}
      <Carousel
        items={slides}
        renderItem={(item) => <SlideContent item={item} />}
        effect="slide"
      />

      {/* Coverflow Effect */}
      <Carousel
        items={slides}
        renderItem={(item) => <SlideContent item={item} />}
        effect="coverflow"
      />

      {/* Cube Effect */}
      <Carousel
        items={slides}
        renderItem={(item) => <SlideContent item={item} />}
        effect="cube"
      />
    </>
  );
}`;

  const cubeEffectCode = `import { Carousel } from "@khanhromvn/zenui";

function CubeEffectExample() {
  return (
    <Carousel
      items={slides}
      renderItem={(item) => <SlideContent item={item} />}
      effect="cube"
      speed={800}
    />
  );
}`;

  const flipEffectCode = `import { Carousel } from "@khanhromvn/zenui";

function FlipEffectExample() {
  return (
    <Carousel
      items={slides}
      renderItem={(item) => <SlideContent item={item} />}
      effect="flip"
      speed={700}
    />
  );
}`;

  const parallaxEffectCode = `import { Carousel } from "@khanhromvn/zenui";

function ParallaxEffectExample() {
  return (
    <Carousel
      items={slides}
      renderItem={(item) => <SlideContent item={item} />}
      effect="parallax"
      parallax={true}
    />
  );
}`;

  const multipleSlidesCode = `import { Carousel } from "@khanhromvn/zenui";

function MultipleSlidesExample() {
  return (
    <Carousel
      items={slides}
      renderItem={(item) => <SlideContent item={item} />}
      slidesPerView={3}
      spaceBetween={20}
      centered={false}
    />
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            Carousel
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A powerful and flexible carousel component with multiple transition
            effects, autoplay, touch support, and extensive customization
            options. Perfect for image galleries, testimonials, product
            showcases, and more.
          </p>
        </section>

        {/* INSTALL SECTION */}
        <section id="install" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Installation
          </h2>
          <CodeBlock
            code={npmInstallCode}
            language="bash"
            theme="vs-dark"
            showLineNumbers={false}
            showGutter={false}
            showLineHighlight={false}
            readOnly={true}
            headerMode="tabs"
            headerIcon={<FileCode size={16} />}
            tabs={[
              {
                id: "npm",
                label: "npm",
                content: npmInstallCode,
                language: "bash",
              },
              {
                id: "yarn",
                label: "yarn",
                content: yarnInstallCode,
                language: "bash",
              },
            ]}
            activeTabId="npm"
          />
        </section>

        {/* USAGE SECTION */}
        <section id="usage" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Basic Usage
          </h2>
          <p className="text-text-secondary mb-6">
            Here's a simple example to get you started with the Carousel
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
            <Carousel
              items={images.slice(0, 3)}
              renderItem={(item) => (
                <div className="w-full h-64 relative rounded-lg overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              )}
              className="bg-card-background"
            />
          </div>

          {/* Code Example */}
          <CodeBlock
            code={basicUsageCode}
            language="typescript"
            theme="vs-dark"
            readOnly={true}
            headerMode="path"
            headerIcon={<FileCode size={16} />}
            filePath="src/components/BasicExample.tsx"
            showLineNumbers={true}
            showGutter={true}
            showLineHighlight={false}
          />
        </section>

        {/* EXAMPLES SECTION */}
        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Effect Examples
          </h2>

          {/* Coverflow Effect */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Coverflow Effect
            </h3>
            <p className="text-text-secondary mb-4">
              3D coverflow effect with perspective and rotation.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <Carousel
                items={images}
                renderItem={(item) => (
                  <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                effect="coverflow"
                centered={true}
                className="bg-card-background py-8"
              />
            </div>

            <CodeBlock
              code={effectsCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/EffectsExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Cube Effect */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Cube Effect
            </h3>
            <p className="text-text-secondary mb-4">
              3D cube rotation effect for dramatic transitions.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <Carousel
                items={images}
                renderItem={(item) => (
                  <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                      Cube
                    </div>
                  </div>
                )}
                effect="cube"
                speed={800}
                className="bg-card-background"
              />
            </div>
          </div>

          {/* Flip Effect */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Flip Effect
            </h3>
            <p className="text-text-secondary mb-4">
              Card flip animation effect for elegant transitions.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <Carousel
                items={features}
                renderItem={(item) => (
                  <div className="w-full h-64 relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex flex-col items-center justify-center text-center shadow-xl">
                    <div className="text-white mb-4">{item.icon}</div>
                    <h3 className="text-white text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                )}
                effect="flip"
                speed={700}
                className="bg-card-background"
              />
            </div>
          </div>

          {/* Parallax Effect */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Parallax Effect
            </h3>
            <p className="text-text-secondary mb-4">
              Smooth parallax scrolling effect with depth perception.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <Carousel
                items={images}
                renderItem={(item) => (
                  <div className="w-full h-64 relative rounded-lg overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                      Parallax
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white text-lg font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                )}
                effect="parallax"
                parallax={true}
                className="bg-card-background"
              />
            </div>
          </div>

          {/* Multiple Slides */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Multiple Slides Per View
            </h3>
            <p className="text-text-secondary mb-4">
              Display multiple slides at once with customizable spacing.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <Carousel
                items={images}
                renderItem={(item) => (
                  <div className="w-full h-48 relative rounded-lg overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                slidesPerView={3}
                spaceBetween={20}
                className="bg-card-background"
              />
            </div>

            <CodeBlock
              code={multipleSlidesCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/MultipleSlidesExample.tsx"
              showLineNumbers={true}
            />
          </div>
        </section>

        {/* PROPS SECTION */}
        <section id="props" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Props
          </h2>
          <p className="text-text-secondary mb-6">
            Complete list of props available for Carousel component.
          </p>

          <div className="bg-card-background border border-border-default rounded-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-table-headerBg">
                  <tr>
                    <th className="px-6 py-4 text-left text-text-primary font-semibold">
                      Prop
                    </th>
                    <th className="px-6 py-4 text-left text-text-primary font-semibold">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-text-primary font-semibold">
                      Default
                    </th>
                    <th className="px-6 py-4 text-left text-text-primary font-semibold">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-default">
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      loop
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Enable continuous loop mode
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      autoplay
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Enable autoplay
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      autoplayDelay
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">3000</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Autoplay delay in ms
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      pauseOnHover
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Pause autoplay on hover
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      slidesPerView
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">1</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Number of slides to show
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      centered
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Center active slide
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      spaceBetween
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">0</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Space between slides in px
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      effect
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      CarouselEffect
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"slide"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Transition effect type
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      speed
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">500</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Transition duration in ms
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showArrows
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show navigation arrows
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showDots
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show pagination dots
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      draggable
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Enable drag/swipe
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      items
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      any[]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">[]</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Array of slide data
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      renderItem
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (item, index) =&gt; ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Render function for slides
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onSlideChange
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (index) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Callback on slide change
                    </td>
                  </tr>
                  <tr className="hover:bg-table-rowHoverBg">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onReachEnd
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      () =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Callback when reaching last slide
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Right Panel Navigation */}
      <RightPanel sections={navigationSections} />
    </>
  );
};

export default CarouselSection;
