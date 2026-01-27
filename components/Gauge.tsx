
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface GaugeProps {
  value: number; // 0 to 100
  label: string;
  color?: string;
  size?: number;
}

const Gauge: React.FC<GaugeProps> = ({ value, label, color = '#22d3ee', size = 120 }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = size;
    const height = size * 0.75;
    const radius = size / 2;
    const innerRadius = radius * 0.7;
    const outerRadius = radius;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const g = svg.append('g').attr('transform', `translate(${width / 2},${height * 0.85})`);

    // Scale from 0 to 100 to radians (-90 to 90 degrees)
    const scale = d3.scaleLinear()
      .domain([0, 100])
      .range([-Math.PI / 2, Math.PI / 2]);

    const arc = d3.arc<any>()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    // Background track
    g.append('path')
      .attr('d', arc as any)
      .attr('fill', '#111')
      .attr('stroke', '#333')
      .attr('stroke-width', 1);

    // Dynamic track (color fill)
    const currentArc = d3.arc<any>()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(-Math.PI / 2)
      .endAngle(scale(value));

    g.append('path')
      .attr('d', currentArc as any)
      .attr('fill', color)
      .attr('opacity', 0.3)
      .style('filter', `blur(8px)`);

    g.append('path')
      .attr('d', currentArc as any)
      .attr('fill', color);

    // Needle
    const needlePath = `M -2 0 L 0 ${-radius * 0.9} L 2 0 Z`;
    const needle = g.append('path')
      .attr('d', needlePath)
      .attr('fill', '#fff')
      .style('filter', 'drop-shadow(0 0 3px rgba(255,255,255,0.8))')
      .attr('transform', `rotate(${(scale(value) * 180) / Math.PI})`);

    // Center hub
    g.append('circle')
      .attr('r', 4)
      .attr('fill', '#fff');

    // Labels for the ends
    const fontSize = size * 0.08;
    g.append('text')
      .attr('x', -radius + 5)
      .attr('y', 15)
      .attr('text-anchor', 'start')
      .attr('fill', '#555')
      .attr('font-size', fontSize)
      .text('נמוך');

    g.append('text')
      .attr('x', radius - 5)
      .attr('y', 15)
      .attr('text-anchor', 'end')
      .attr('fill', '#555')
      .attr('font-size', fontSize)
      .text('גבוה');

    // Center Label
    g.append('text')
      .attr('y', 35)
      .attr('text-anchor', 'middle')
      .attr('fill', color)
      .attr('font-weight', 'bold')
      .attr('font-size', size * 0.12)
      .text(label);

  }, [value, color, label, size]);

  return (
    <div className="flex flex-col items-center">
      <svg ref={svgRef} width={size} height={size * 0.9}></svg>
    </div>
  );
};

export default Gauge;
