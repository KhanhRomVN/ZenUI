import { Card } from "../../../../components/package/card";
import { CodeBlock } from "../../../../components/package/codeblock";
import { FileCode, Star, User, Check, X, RefreshCw } from "lucide-react";
import RightPanel from "../RightPanel";
import React from "react";

const CardSection = () => {
  // Navigation sections for right panel
  const navigationSections = [
    { id: "about", label: "About" },
    { id: "install", label: "Install" },
    { id: "usage", label: "Usage" },
    { id: "examples", label: "Examples" },
    { id: "props", label: "Props" },
  ];

  const [animationKey, setAnimationKey] = React.useState(0);

  const handleReloadAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  const npmInstallCode = `npm install @khanhromvn/zenui`;

  const yarnInstallCode = `yarn add @khanhromvn/zenui`;

  const basicUsageCode = `import { Card } from "@khanhromvn/zenui";

function MyComponent() {
  return (
    <Card
      className="bg-card-background border-border-default rounded-md"
      cardAlign={{ horizontal: "center", vertical: "center" }}
      width={50}
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-text-primary">
            Basic Card
          </h3>
          <p className="text-sm text-text-secondary mt-1">
            Card with full header and footer
          </p>
        </div>
        
        <div className="border-t border-border-default pt-4">
          <p className="text-text-secondary">
            Footer section contains action buttons. Footer section
            contains action buttons. Footer section contains action
            buttons. Footer section contains action buttons.
          </p>
        </div>
        
        <div className="flex gap-3 border-t border-border-default pt-4">
          <button className="px-4 py-2 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors">
            Action
          </button>
          <button className="px-4 py-2 bg-button-secondBg hover:bg-button-secondBgHover text-text-primary rounded-lg transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </Card>
  );
}`;

  const alignmentExampleCode = `import { Card } from "@khanhromvn/zenui";

function AlignmentExample() {
  return (
    <div className="space-y-6">
      {/* Card Alignment in Container */}
      <div className="h-96 border-2 border-dashed border-border-default rounded-lg p-4 flex">
        <Card
          cardAlign={{ horizontal: "center", vertical: "center" }}
          width={50}
          className="bg-card-background border-border-default rounded-md"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Centered Card
            </h3>
            <p className="text-sm text-text-secondary">
              This card is centered both horizontally and vertically in container.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}`;

  const sizeOptionCode = `import { Card } from "@khanhromvn/zenui";

function SizeOptionExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        size={80}
        className="bg-card-background border-border-default rounded-md"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-1">
          Small Card
        </h3>
        <p className="text-sm text-text-secondary mb-3">Size 80%</p>
        <p className="text-text-secondary">
          Compact card for dense layouts.
        </p>
      </Card>
      
      <Card
        size={100}
        className="bg-card-background border-border-default rounded-md"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-1">
          Default Card
        </h3>
        <p className="text-sm text-text-secondary mb-3">Size 100%</p>
        <p className="text-text-secondary">
          Standard size for most use cases.
        </p>
      </Card>
      
      <Card
        size={120}
        className="bg-card-background border-border-default rounded-md"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-1">
          Large Card
        </h3>
        <p className="text-sm text-text-secondary mb-3">Size 120%</p>
        <p className="text-text-secondary">
          Emphasized card for important content.
        </p>
      </Card>
    </div>
  );
}`;

  const animationExampleCode = `import React from "react";
import { Card } from "@khanhromvn/zenui";
import { RefreshCw } from "lucide-react";

function AnimationExample() {
  const [animationKey, setAnimationKey] = React.useState(0);

  const handleReloadAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="relative h-96 border-2 border-dashed border-border-default rounded-lg p-4 flex items-center justify-center">
      <Card
        key={animationKey}
        appearAnimationVariant="slide-up"
        className="bg-card-background border-border-default rounded-md"
        width={40}
      >
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-text-primary">
            Animated Card
          </h3>
          <p className="text-text-secondary">
            This card appears with a slide-up animation. Click the reload button to see it again.
          </p>
        </div>
      </Card>
      
      <button
        onClick={handleReloadAnimation}
        className="absolute bottom-4 right-4 p-2 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors"
        title="Reload animation"
      >
        <RefreshCw size={20} />
      </button>
    </div>
  );
}`;

  const hoverEffectExampleCode = `import { Card } from "@khanhromvn/zenui";

function HoverEffectExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        hoverEffectVariant="lift"
        className="bg-card-background border-border-default rounded-md"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Lift Effect
        </h3>
        <p className="text-text-secondary">
          Hover to see lift effect with shadow
        </p>
      </Card>
      
      <Card
        hoverEffectVariant="glow"
        className="bg-card-background border-border-default rounded-md"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Glow Effect
        </h3>
        <p className="text-text-secondary">
          Hover to see glowing effect
        </p>
      </Card>
      
      <Card
        hoverEffectVariant="glass"
        className="bg-card-background border-border-default rounded-md"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Glass Effect
        </h3>
        <p className="text-text-secondary">
          Hover to see glass morphism effect
        </p>
      </Card>
      
      <Card
        hoverEffectVariant="tilt"
        className="bg-card-background border-border-default rounded-md"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Tilt Effect
        </h3>
        <p className="text-text-secondary">
          Hover to see 3D tilt effect
        </p>
      </Card>
      
      <Card
        hoverEffectVariant="scale"
        className="bg-card-background border-border-default rounded-md"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Scale Effect
        </h3>
        <p className="text-text-secondary">
          Hover to see scale up effect
        </p>
      </Card>
      
      <Card
        hoverEffectVariant="border-glow"
        className="bg-card-background border-border-default rounded-md"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Border Glow
        </h3>
        <p className="text-text-secondary">
          Hover to see border glowing
        </p>
      </Card>
    </div>
  );
}`;

  const loginFormCode = `import { Card } from "@khanhromvn/zenui";

function LoginFormExample() {
  return (
    <Card
      className="bg-card-background border-border-default rounded-md"
      width={40}
      cardAlign={{ horizontal: "center", vertical: "center" }}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-text-primary">
            Welcome Back
          </h3>
          <p className="text-sm text-text-secondary mt-1">
            Login to your account
          </p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-button-bg bg-input-background text-text-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-button-bg bg-input-background text-text-primary"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <button className="px-4 py-2 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors w-full">
            Login
          </button>
          <button className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg transition-colors w-full flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </Card>
  );
}`;

  const productCardCode = `import { Card } from "@khanhromvn/zenui";

function ProductCardExample() {
  return (
    <Card
      className="bg-card-background border-border-default rounded-md overflow-hidden"
      width={35}
      style={{ padding: 0 }}
    >
      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-text-primary">
            Premium Headphones
          </h3>
          <p className="text-sm text-text-secondary mt-1">
            High-quality wireless headphones with noise cancellation
          </p>
        </div>
        <p className="text-text-secondary">
          Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation technology.
        </p>
        <div className="flex justify-end gap-3 pt-2">
          <button className="px-4 py-2 bg-button-secondBg hover:bg-button-secondBgHover text-text-primary rounded-lg transition-colors">
            View Details
          </button>
          <button className="px-4 py-2 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </Card>
  );
}`;

  const featureCardCode = `import { Card } from "@khanhromvn/zenui";
import { Zap } from "lucide-react";

function FeatureCardExample() {
  return (
    <Card
      className="bg-card-background border-border-default rounded-md hover:border-button-bg transition-colors"
      width={30}
    >
      <div className="space-y-3">
        <div className="w-12 h-12 bg-button-bg/10 rounded-lg flex items-center justify-center">
          <Zap className="text-button-bg" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-text-primary">
          Lightning Fast
        </h3>
        <p className="text-text-secondary">
          Optimized for performance with instant loading and smooth interactions.
        </p>
      </div>
    </Card>
  );
}`;

  const statsCardCode = `import { Card } from "@khanhromvn/zenui";
import { TrendingUp } from "lucide-react";

function StatsCardExample() {
  return (
    <Card
      className="bg-card-background border-border-default rounded-md"
      width={30}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-green-500" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-text-primary pt-2">
              Total Revenue
            </h3>
            <p className="text-sm text-text-secondary">
              Monthly earnings overview
            </p>
          </div>
          <button className="p-2 hover:bg-input-background rounded-lg transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-text-secondary">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="12" cy="5" r="1"/>
              <circle cx="12" cy="19" r="1"/>
            </svg>
          </button>
        </div>
        
        <div className="flex items-center justify-between border-t border-border-default pt-4">
          <span className="text-2xl font-bold text-text-primary">
            $12,458
          </span>
          <button className="px-4 py-2 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors">
            View Report
          </button>
        </div>
      </div>
    </Card>
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">Card</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A flexible container component for displaying content and actions in
            a clear and organized manner. Perfect for dashboards, product
            displays, content sections, and data presentation with multiple
            variants and extensive customization options.
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
            Here's a simple example to get you started with the Card component.
          </p>

          {/* Live Demo */}
          <div className="mb-6">
            <div className="border-2 border-dashed border-border-default rounded-lg p-6">
              <Card
                className="bg-card-background border-border-default rounded-md"
                cardAlign={{ horizontal: "center", vertical: "center" }}
                width={50}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      Basic Card
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">
                      Card with full header and footer
                    </p>
                  </div>

                  <div className="border-t border-border-default pt-4">
                    <p className="text-text-secondary">
                      Footer section contains action buttons. Footer section
                      contains action buttons. Footer section contains action
                      buttons. Footer section contains action buttons.
                    </p>
                  </div>

                  <div className="flex gap-3 border-t border-border-default pt-4">
                    <button className="px-4 py-2 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors">
                      Action
                    </button>
                    <button className="px-4 py-2 bg-button-secondBg hover:bg-button-secondBgHover text-text-primary rounded-lg transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </Card>
            </div>
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
          {/* Alignment */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Alignment Options
            </h3>
            <p className="text-text-secondary mb-4">
              Control both card alignment in container and content alignment
              inside the card.
            </p>

            <div className="mb-4 space-y-6">
              <div>
                <h4 className="text-md font-semibold text-text-primary mb-3">
                  Card Alignment in Container
                </h4>
                <div className="h-96 border-2 border-dashed border-border-default rounded-lg p-4 flex">
                  <Card
                    cardAlign={{ horizontal: "center", vertical: "center" }}
                    width={50}
                    className="bg-card-background border-border-default rounded-md"
                  >
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        Centered Card
                      </h3>
                      <p className="text-sm text-text-secondary">
                        This card is centered both horizontally and vertically
                        in container.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>

              <CodeBlock
                code={alignmentExampleCode}
                language="typescript"
                theme="vs-dark"
                readOnly={true}
                headerMode="path"
                headerIcon={<FileCode size={16} />}
                filePath="src/components/AlignmentExample.tsx"
                showLineNumbers={true}
              />
            </div>
          </div>

          {/* Size Options */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Size Options
            </h3>
            <p className="text-text-secondary mb-4">
              Control card size with percentage scale (80%, 100%, 120%).
            </p>

            <div className="mb-4">
              <div className="border-2 border-dashed border-border-default rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card
                    size={80}
                    className="bg-card-background border-border-default rounded-md"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      Small Card
                    </h3>
                    <p className="text-sm text-text-secondary mb-3">Size 80%</p>
                    <p className="text-text-secondary">
                      Compact card for dense layouts.
                    </p>
                  </Card>

                  <Card
                    size={100}
                    className="bg-card-background border-border-default rounded-md"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      Default Card
                    </h3>
                    <p className="text-sm text-text-secondary mb-3">
                      Size 100%
                    </p>
                    <p className="text-text-secondary">
                      Standard size for most use cases.
                    </p>
                  </Card>

                  <Card
                    size={120}
                    className="bg-card-background border-border-default rounded-md"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      Large Card
                    </h3>
                    <p className="text-sm text-text-secondary mb-3">
                      Size 120%
                    </p>
                    <p className="text-text-secondary">
                      Emphasized card for important content.
                    </p>
                  </Card>
                </div>
              </div>

              <CodeBlock
                code={sizeOptionCode}
                language="typescript"
                theme="vs-dark"
                readOnly={true}
                headerMode="path"
                headerIcon={<FileCode size={16} />}
                filePath="src/components/SizeOptionExample.tsx"
                showLineNumbers={true}
              />
            </div>
          </div>

          {/* Animation Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Animation Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Cards can appear with different animation effects using
              appearAnimationVariant prop. Click the reload button to see the
              animation again.
            </p>

            <div className="mb-4">
              <div className="relative h-96 border-2 border-dashed border-border-default rounded-lg p-4 flex items-center justify-center">
                <Card
                  key={animationKey}
                  appearAnimationVariant="slide-up"
                  className="bg-card-background border-border-default rounded-md"
                  width={40}
                >
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-text-primary">
                      Animated Card
                    </h3>
                    <p className="text-text-secondary">
                      This card appears with a slide-up animation. Click the
                      reload button to see it again.
                    </p>
                  </div>
                </Card>

                <button
                  onClick={handleReloadAnimation}
                  className="absolute bottom-4 right-4 p-2 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors shadow-lg"
                  title="Reload animation"
                >
                  <RefreshCw size={20} />
                </button>
              </div>

              <CodeBlock
                code={animationExampleCode}
                language="typescript"
                theme="vs-dark"
                readOnly={true}
                headerMode="path"
                headerIcon={<FileCode size={16} />}
                filePath="src/components/AnimationExample.tsx"
                showLineNumbers={true}
              />
            </div>
          </div>

          {/* Hover Effects */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Hover Effects
            </h3>
            <p className="text-text-secondary mb-4">
              Cards can have interactive hover effects using hoverEffectVariant
              prop. Hover over each card to see the effect.
            </p>

            <div className="mb-4">
              <div className="border-2 border-dashed border-border-default rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card
                    hoverEffectVariant="lift"
                    className="bg-card-background border-border-default rounded-md"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Lift Effect
                    </h3>
                    <p className="text-text-secondary">
                      Hover to see lift effect with shadow
                    </p>
                  </Card>

                  <Card
                    hoverEffectVariant="glow"
                    className="bg-card-background border-border-default rounded-md"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Glow Effect
                    </h3>
                    <p className="text-text-secondary">
                      Hover to see glowing effect
                    </p>
                  </Card>

                  <Card
                    hoverEffectVariant="glass"
                    className="bg-card-background border-border-default rounded-md"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Glass Effect
                    </h3>
                    <p className="text-text-secondary">
                      Hover to see glass morphism effect
                    </p>
                  </Card>

                  <Card
                    hoverEffectVariant="tilt"
                    className="bg-card-background border-border-default rounded-md"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Tilt Effect
                    </h3>
                    <p className="text-text-secondary">
                      Hover to see 3D tilt effect
                    </p>
                  </Card>

                  <Card
                    hoverEffectVariant="scale"
                    className="bg-card-background border-border-default rounded-md"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Scale Effect
                    </h3>
                    <p className="text-text-secondary">
                      Hover to see scale up effect
                    </p>
                  </Card>

                  <Card
                    hoverEffectVariant="border-glow"
                    className="bg-card-background border-border-default rounded-md"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Border Glow
                    </h3>
                    <p className="text-text-secondary">
                      Hover to see border glowing
                    </p>
                  </Card>
                </div>
              </div>

              <CodeBlock
                code={hoverEffectExampleCode}
                language="typescript"
                theme="vs-dark"
                readOnly={true}
                headerMode="path"
                headerIcon={<FileCode size={16} />}
                filePath="src/components/HoverEffectExample.tsx"
                showLineNumbers={true}
              />
            </div>
          </div>

          {/* Complex Examples */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Complex Examples
            </h3>
            <p className="text-text-secondary mb-4">
              Real-world examples showing various card compositions.
            </p>

            {/* Login Form */}
            <div className="mb-6">
              <h4 className="text-md font-semibold text-text-primary mb-3">
                Login Form Card
              </h4>
              <div className="border-2 border-dashed border-border-default rounded-lg p-6 flex justify-center">
                <Card
                  className="bg-card-background border-border-default rounded-md"
                  width={45}
                  cardAlign={{ horizontal: "center", vertical: "center" }}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">
                        Login to your account
                      </h3>
                      <p className="text-sm text-text-secondary mt-1">
                        Enter your email below to login to your account
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-3 py-2 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-button-bg bg-input-background text-text-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Enter your password"
                          className="w-full px-3 py-2 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-button-bg bg-input-background text-text-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="px-4 py-2 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors w-full">
                        Login
                      </button>
                      <button className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg transition-colors w-full flex items-center justify-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Login with Google
                      </button>
                    </div>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={loginFormCode}
                language="typescript"
                theme="vs-dark"
                readOnly={true}
                headerMode="path"
                headerIcon={<FileCode size={16} />}
                filePath="src/components/LoginFormExample.tsx"
                showLineNumbers={true}
              />
            </div>

            {/* Product Card */}
            <div className="mb-6">
              <h4 className="text-md font-semibold text-text-primary mb-3">
                Product Card
              </h4>
              <div className="border-2 border-dashed border-border-default rounded-lg p-6 flex justify-center">
                <Card
                  className="bg-card-background border-border-default rounded-md overflow-hidden"
                  width={35}
                  style={{ padding: 0 }}
                  cardAlign={{ horizontal: "center", vertical: "center" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
                    alt="Product"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">
                        Premium Headphones
                      </h3>
                      <p className="text-sm text-text-secondary mt-1">
                        High-quality wireless headphones with noise cancellation
                      </p>
                    </div>
                    <p className="text-text-secondary">
                      Experience crystal-clear audio with our premium wireless
                      headphones featuring active noise cancellation technology.
                    </p>
                    <div className="flex justify-end gap-3 pt-2">
                      <button className="px-4 py-2 bg-button-secondBg hover:bg-button-secondBgHover text-text-primary rounded-lg transition-colors">
                        View Details
                      </button>
                      <button className="px-4 py-2 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={productCardCode}
                language="typescript"
                theme="vs-dark"
                readOnly={true}
                headerMode="path"
                headerIcon={<FileCode size={16} />}
                filePath="src/components/ProductCardExample.tsx"
                showLineNumbers={true}
              />
            </div>

            {/* Feature Card */}
            <div className="mb-6">
              <h4 className="text-md font-semibold text-text-primary mb-3">
                Feature Card
              </h4>
              <div className="border-2 border-dashed border-border-default rounded-lg p-6 flex justify-center">
                <Card
                  className="bg-card-background border-border-default rounded-md hover:border-button-bg transition-colors"
                  width={40}
                  cardAlign={{ horizontal: "center", vertical: "center" }}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-button-bg/10 rounded-lg flex items-center justify-center">
                      <Star className="text-button-bg" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      Lightning Fast
                    </h3>
                    <p className="text-text-secondary">
                      Optimized for performance with instant loading and smooth
                      interactions.
                    </p>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={featureCardCode}
                language="typescript"
                theme="vs-dark"
                readOnly={true}
                headerMode="path"
                headerIcon={<FileCode size={16} />}
                filePath="src/components/FeatureCardExample.tsx"
                showLineNumbers={true}
              />
            </div>

            {/* Stats Card */}
            <div className="mb-6">
              <h4 className="text-md font-semibold text-text-primary mb-3">
                Stats Card with Actions
              </h4>
              <div className="border-2 border-dashed border-border-default rounded-lg p-6 flex justify-center">
                <Card
                  className="bg-card-background border-border-default rounded-md"
                  width={40}
                  cardAlign={{ horizontal: "center", vertical: "center" }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                          <User className="text-green-500" size={20} />
                        </div>
                        <h3 className="text-lg font-semibold text-text-primary pt-2">
                          Total Revenue
                        </h3>
                        <p className="text-sm text-text-secondary">
                          Monthly earnings overview
                        </p>
                      </div>
                      <button className="p-2 hover:bg-input-background rounded-lg transition-colors">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="text-text-secondary"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="19" r="1" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between border-t border-border-default pt-4">
                      <span className="text-2xl font-bold text-text-primary">
                        $12,458
                      </span>
                      <button className="px-4 py-2 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors">
                        View Report
                      </button>
                    </div>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={statsCardCode}
                language="typescript"
                theme="vs-dark"
                readOnly={true}
                headerMode="path"
                headerIcon={<FileCode size={16} />}
                filePath="src/components/StatsCardExample.tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </section>

        {/* PROPS SECTION */}
        <section id="props" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Props
          </h2>
          <p className="text-text-secondary mb-6">
            Complete list of props available for the Card component.
          </p>

          <div className="bg-card-background border border-border-default rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-input-background">
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
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      size
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">100</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Card size (percentage scale: 50-200)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      width
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Card width (percentage of parent container: 1-100)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      cardAlign
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      {`{ horizontal?: "left" | "center" | "right", vertical?: "top" | "center" | "bottom" }`}
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Card alignment in parent container
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      contentAlign
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      {`{ horizontal?: "left" | "center" | "right", vertical?: "top" | "center" | "bottom" }`}
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Content alignment inside card
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      title
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Card title
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      subtitle
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Card subtitle
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      children
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Card body content
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      footer
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Card footer content (buttons, actions)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      headerBg
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      var(--card-bg)
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Header background color
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      footerBg
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      var(--card-bg)
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Footer background color
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showDivider
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show divider between header and content
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      hoverable
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Enable hover effects
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      appearAnimationVariant
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "fade" | "slide-up" | "slide-down" | "slide-left" |
                      "slide-right" | "scale" | "rotate" | "flip" | "none"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"none"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Animation variant when card appears
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      hoverEffectVariant
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "lift" | "glow" | "border-glow" | "glass" | "tilt" |
                      "scale" | "shadow" | "none"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Hover effect variant (overrides hoverEffect if set)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      hoverEffect
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      HoverEffectConfig
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom hover effect configuration (only works when
                      hoverEffectVariant is not set)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      className
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">""</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom CSS classes
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onClick
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (e: MouseEvent) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Click event handler
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

export default CardSection;
