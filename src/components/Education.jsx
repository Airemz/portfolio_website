import React from 'react';
import { education } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="relativerounded-md border border-border bg-card p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <h4 className="text-sm text-muted-foreground">{edu.institution}</h4>
              <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>

              {edu.extra && (
                <p className="mt-2 text-sm text-muted-foreground">{edu.extra}</p>
              )}

              {edu.coursework && (
                <p className="mt-3 text-sm">
                  <span className="font-medium">Relevant Coursework:</span>{' '}
                  {edu.coursework.join(', ')}
                </p>
              )}

              {edu.involvement && edu.involvement.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-medium">Involvement:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                    {edu.involvement.map((inv, i) => (
                      <li key={i}>{inv}</li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.awards && edu.awards.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-medium">Awards:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                    {edu.awards.map((award, i) => (
                      <li key={i}>{award}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
