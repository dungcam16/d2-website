"use client";
import React from "react";
import { Block } from "src/lovable/blocks";

export default function ZapierMigration() {
  return (
    <Block id="6608514d-9ff8-4503-8d60-70588636b048" type="service-page">
      <h1 className="text-4xl font-bold mb-4">Seamless Zapier Migration to n8n</h1>
      <p className="text-lg">
        Ready to reduce your automation costs and gain more flexibility? Our
        expert team provides a seamless, step-by-step migration service from
        Zapier to n8n, helping you achieve up to 90% savings on your automation
        expenses. We ensure a smooth transition with minimal downtime and
        optimized workflows.
      </p>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">
          Our Zapier Migration Process
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Discovery & Planning:</strong> We analyze your existing Zapier workflows.
          </li>
          <li>
            <strong>Rebuilding Workflows in n8n:</strong> Meticulous, step-by-step recreation.
          </li>
          <li>
            <strong>Testing & Optimization:</strong> Ensuring everything runs perfectly.
          </li>
          <li>
            <strong>Training & Support:</strong> Empowering your team to manage n8n.
          </li>
        </ul>
      </div>
    </Block>
  );
}