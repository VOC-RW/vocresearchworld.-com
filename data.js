
/* VOC Research World — V6.1 content architecture
   Relationships: Authors ↔ Articles ↔ Projects ↔ Publications ↔ References
   This file is intentionally static and backend-ready. A future CMS/database can
   replace these objects without changing the page structure.
*/
(function(){
  const authors = {
    editorial: {
      id:'editorial',
      name:'VOC Research Editorial Team',
      shortName:'VOC Editorial Team',
      role:'Research, education & publication development',
      initials:'VR',
      affiliation:'VOC Research World',
      bio:'The editorial team develops scientific educational content, research notes and publication structures across laboratory science and applied research.',
      interests:['Biochemistry','Analytical Science','Quality Assurance','Instrumentation','Scientific Communication'],
      articles:['metabolism','uvvis','qa','biochemical-analysis'],
      projects:['natural-products','instrumentation-workflow']
    },
    dataai: {
      id:'dataai',
      name:'VOC Data & AI Team',
      shortName:'VOC Data & AI Team',
      role:'Scientific data analysis & computational workflows',
      initials:'DA',
      affiliation:'VOC Research World',
      bio:'The Data & AI team focuses on reproducible scientific data preparation, statistical analysis, visualization and responsible computational methods.',
      interests:['Data Analysis','Statistics','Scientific Computing','Visualization','AI for Science'],
      articles:['data'],
      projects:['data-ai-workflow']
    }
  };

  const references = {
    r1:{id:'r1', authors:'Nelson DL, Cox MM', year:2021, title:'Lehninger Principles of Biochemistry', source:'W.H. Freeman.'},
    r2:{id:'r2', authors:'Skoog DA, Holler FJ, Crouch SR', year:2018, title:'Principles of Instrumental Analysis', source:'Cengage Learning.'},
    r3:{id:'r3', authors:'Miller JN, Miller JC', year:2018, title:'Statistics and Chemometrics for Analytical Chemistry', source:'Pearson.'},
    r4:{id:'r4', authors:'World Health Organization', year:2011, title:'Laboratory Quality Management System: Handbook', source:'WHO.'},
    r5:{id:'r5', authors:'VOC Research World', year:2026, title:'VOC Scientific Knowledge Series', source:'VOC Research World.'}
  };

  const articles = {
    metabolism:{
      id:'metabolism',
      type:'Research Note',
      category:'Biochemistry',
      title:'Understanding Metabolic Regulation',
      subtitle:'How cells coordinate pathways, enzymes and energy flow.',
      date:'2026-03-12',
      authorId:'editorial',
      projectId:'natural-products',
      keywords:['metabolism','enzymes','feedback inhibition','hormonal regulation'],
      references:['r1','r5'],
      related:['qa','uvvis'],
      sections:[
        ['Abstract','Metabolic regulation allows cells to coordinate energy production, biosynthesis and nutrient use while responding to changing physiological conditions.'],
        ['Introduction','Metabolic pathways operate as connected networks rather than isolated reactions. Regulation determines when substrates enter pathways, how rapidly intermediates are processed and how cellular resources are allocated.'],
        ['Scientific Discussion','Important regulatory mechanisms include allosteric control, covalent modification, feedback inhibition, changes in enzyme synthesis and degradation, and hormonal control. The effect of a regulator depends on the pathway, tissue, nutritional state and cellular compartment.'],
        ['Research Perspective','A structured research approach can connect biochemical regulation to measurable laboratory variables, including enzyme activity, metabolite concentration and analytical biomarkers.']
      ]
    },

    
    uvvis:{
      id:'uvvis',
      type:'Educational Resource',
      category:'Analytical Science',
      title:'UV–Visible Spectrophotometry: Principles, Instrumentation and Laboratory Applications',
      subtitle:'A comprehensive guide to light absorption, Beer–Lambert law, instrument operation, calibration and analytical applications.',
      date:'2026-11-03',
      authorId:'editorial',
      projectId:'instrumentation-workflow',
      keywords:[
        'UV-Visible spectrophotometry',
        'electromagnetic radiation',
        'Beer-Lambert law',
        'absorbance',
        'transmittance',
        'wavelength selection',
        'calibration',
        'quality control',
        'analytical instrumentation'
      ],
      references:['r1','r2','r3','r4'],
      related:['data','metabolism','qa'],
      sections:[
        ['Abstract',
        'UV–Visible spectrophotometry is an analytical technique that measures the absorption of ultraviolet and visible radiation by chemical substances. It is widely applied in biochemistry, pharmaceutical analysis, environmental monitoring, food science and industrial quality control. This article examines its theoretical principles, instrumentation, analytical procedures, calibration, quality assurance and common laboratory applications.'],

        ['1. Introduction to UV–Visible Spectrophotometry',
        'UV–Visible spectrophotometry is based on the interaction of electromagnetic radiation with matter. When light passes through a sample, certain wavelengths may be absorbed by molecules or ions. The amount of radiation absorbed depends on the chemical properties of the substance, its concentration, the wavelength selected and the optical path length. The technique is particularly useful for substances that absorb ultraviolet or visible light directly or can be converted into coloured reaction products.'],

        ['2. Electromagnetic Radiation and Molecular Absorption',
        'Electromagnetic radiation consists of energy transmitted through oscillating electric and magnetic fields. The ultraviolet region commonly used in laboratory UV–Vis analysis is approximately 200–400 nm, while the visible region is approximately 400–700 nm. When a molecule absorbs radiation of an appropriate energy, electrons may move from a lower-energy state to a higher-energy state. Common electronic transitions include pi to pi-star and n to pi-star transitions. The wavelength absorbed depends on the molecular structure and its electronic environment.'],

        ['3. The Beer–Lambert Law',
        'The Beer–Lambert law describes the relationship between absorbance and the concentration of an absorbing substance under suitable conditions. It is expressed as A = εlc, where A is absorbance, ε is the molar absorptivity, l is the optical path length and c is the concentration. Absorbance is also related to transmittance by A = log10(I0/I), where I0 represents incident light intensity and I represents transmitted light intensity. For a fixed wavelength and path length, absorbance is proportional to concentration within the validated linear working range.'],

        ['4. Main Components of a UV–Visible Spectrophotometer',
        'A typical UV–Visible spectrophotometer contains a radiation source, wavelength selector or monochromator, sample holder, detector and signal-processing or display system. Deuterium lamps are commonly used for ultraviolet radiation, while tungsten-halogen lamps are commonly used for visible and near-infrared regions. The monochromator selects the required wavelength using optical components such as slits, prisms or diffraction gratings. The sample holder positions the cuvette in the light path. The detector measures transmitted radiation and converts it into an electrical signal for processing and display.'],

        ['5. Types of UV–Visible Spectrophotometers',
        'Single-beam instruments measure the blank and sample in sequence using one optical path. Double-beam instruments divide radiation into sample and reference paths, allowing comparison during measurement. Array-based instruments may use multiple detector elements to collect information across a range of wavelengths. Instrument selection depends on analytical requirements, sample throughput, wavelength range, measurement stability and available resources.'],

        ['6. Sample Preparation and Cuvette Selection',
        'Good sample preparation is essential for reliable measurement. Samples should be homogeneous, appropriately diluted and free from unwanted particles that may scatter light. The solvent or reagent blank should contain the same relevant components as the sample, except for the analyte being measured. Quartz cuvettes are generally required for ultraviolet measurements because ordinary glass absorbs strongly in parts of the UV region. Glass or suitable plastic cuvettes may be used for compatible visible-range measurements. Cuvettes should be clean, correctly oriented and handled by their non-optical surfaces to reduce fingerprints and contamination.'],

        ['7. General Laboratory Operating Procedure',
        'A typical analysis begins by switching on the instrument and allowing it to stabilize according to the manufacturer’s instructions. The appropriate wavelength and measurement mode are selected. A suitable blank is prepared and used to establish the reference baseline. Calibration standards are measured when quantitative analysis requires a calibration curve. The sample is then introduced into a suitable cuvette and its absorbance is recorded. Replicate measurements and appropriate quality-control materials may be used to assess measurement consistency. The procedure must follow the validated method and the instrument operating manual.'],

        ['8. Calibration and Quantitative Analysis',
        'Quantitative UV–Vis analysis commonly uses standards of known concentration to establish a calibration relationship between concentration and absorbance. A calibration graph is constructed by plotting absorbance against concentration. A suitable regression model may then be used to estimate the concentration of an unknown sample within the validated calibration range. The calibration should be evaluated for linearity, residual patterns, range and consistency with quality requirements. Samples outside the working range may require appropriate dilution and remeasurement. A high coefficient of determination alone does not prove that a calibration model is suitable.'],

        ['9. Applications in Biochemistry and Laboratory Science',
        'UV–Visible spectrophotometry is used in biochemical assays to measure substances such as proteins, nucleic acids and metabolites, depending on the analytical method. Enzyme assays may monitor the formation or disappearance of a light-absorbing compound over time. In pharmaceutical analysis, the technique can support drug-content determination and dissolution studies. In environmental analysis, suitable methods may be used to estimate selected contaminants. In food science, it can support colour measurements and the determination of selected chemical constituents. The method must be validated or verified for its intended analytical application.'],

        ['10. Quality Assurance and Quality Control',
        'Reliable spectrophotometric measurements require appropriate quality assurance and quality control. Important practices include instrument performance checks, wavelength accuracy assessment, photometric accuracy checks, baseline evaluation, blank measurements, calibration verification and the use of suitable control materials. Cuvette condition, reagent quality, temperature and instrument stability should also be considered. Acceptance criteria should be defined before analysis, and unexpected results should be investigated and documented.'],

        ['11. Common Sources of Analytical Error',
        'Errors may result from unsuitable blanks, incorrect wavelength selection, dirty or scratched cuvettes, air bubbles, sample turbidity, incorrect dilution, unstable reagents, instrument drift and inappropriate calibration. Chemical factors such as changes in pH, complex formation and analyte instability may also affect absorbance. Deviations from Beer–Lambert behaviour can occur at high concentrations, when chemical interactions become significant or when instrumental conditions are unsuitable. Good laboratory practice helps identify and reduce these errors.'],

        ['12. Advantages and Limitations',
        'UV–Visible spectrophotometry is relatively rapid, widely available, often economical and suitable for many quantitative analytical procedures. It can support kinetic measurements and routine laboratory testing. However, not all substances absorb sufficiently in the UV–visible region. Interfering substances, overlapping absorption bands, sample turbidity and matrix effects may reduce selectivity. Reliable analysis therefore depends on appropriate method development, sample preparation, calibration and quality assessment.'],

        ['13. Conclusion',
        'UV–Visible spectrophotometry is an important analytical technique that connects the interaction of light with matter to qualitative and quantitative chemical investigation. Understanding electromagnetic radiation, molecular absorption, the Beer–Lambert law and instrument components provides a foundation for its effective use. Accurate results require suitable sample preparation, correct wavelength selection, calibration, quality control and careful interpretation. Its applications across biochemistry, pharmaceutical science, environmental analysis and industrial laboratories make it a valuable instrument in modern analytical science.']
      ]
    },


    data:{
      id:'data',
      type:'Research Note',
      category:'Data & AI',
      title:'From Laboratory Data to Scientific Insight',
      subtitle:'A structured workflow for scientific data analysis.',
      date:'2026-01-26',
      authorId:'dataai',
      projectId:'data-ai-workflow',
      keywords:['data analysis','statistics','visualization','regression'],
      references:['r3','r5'],
      related:['uvvis','qa'],
      sections:[
        ['Abstract','Scientific data analysis transforms measurements into evidence through cleaning, descriptive statistics, visualization, modelling and interpretation.'],
        ['Data Preparation','Laboratory datasets should be checked for missing values, duplicates, incorrect units, transcription errors and unusual observations before formal analysis.'],
        ['Analysis','Descriptive statistics provide an initial summary. Correlation can quantify association, while regression can model relationships when assumptions and study design support that interpretation.'],
        ['Scientific Interpretation','A statistical pattern is not automatically a causal relationship. Conclusions should reflect the study design, measurement quality, uncertainty and biological or chemical context.']
      ]
    },

    qa:{
      id:'qa',
      type:'Quality Note',
      category:'Quality Assurance',
      title:'Quality Assurance versus Quality Control',
      subtitle:'How QA and QC work together in laboratory systems.',
      date:'2026-01-10',
      authorId:'editorial',
      projectId:'instrumentation-workflow',
      keywords:['quality assurance','quality control','calibration','validation'],
      references:['r4','r5'],
      related:['uvvis','data'],
      sections:[
        ['Abstract','Quality assurance and quality control are related but distinct components of a laboratory quality system.'],
        ['Quality Assurance','QA focuses on planned and systematic activities that create confidence that a process can consistently produce fit-for-purpose results.'],
        ['Quality Control','QC focuses on operational checks and measurements used to determine whether analytical results meet defined requirements.'],
        ['Integrated Practice','Calibration, method verification, documentation, competency, equipment maintenance and control materials can work together within a broader quality system.']
      ]
    },

    'biochemical-analysis':{
      id:'biochemical-analysis',
      type:'Educational Resource',
      category:'Biochemistry',
      title:'Fundamentals of Biochemical Analysis in the Laboratory',
      subtitle:'Principles, analytical methods, specimen handling and interpretation of biochemical results.',
      date:'2026-11-03',
      authorId:'editorial',
      projectId:'instrumentation-workflow',
      keywords:[
        'biochemical analysis',
        'clinical biochemistry',
        'enzymes',
        'metabolites',
        'laboratory methods',
        'quality control'
      ],
      references:['r1','r2','r4'],
      related:['metabolism','uvvis','qa'],
      sections:[
        ['Abstract',
        'Biochemical analysis is the systematic investigation of chemical substances and biochemical processes in biological materials. It provides information about metabolites, enzymes, proteins, carbohydrates, lipids, electrolytes and other substances involved in cellular and physiological functions. This article introduces the fundamental principles, analytical approaches, specimen requirements and quality considerations that support reliable biochemical laboratory investigations.'],

        ['1. Introduction to Biochemical Analysis',
        'Biochemical analysis involves the measurement and interpretation of chemical components in biological samples. Depending on the research question, samples may include blood, serum, plasma, urine, tissue extracts and other biological materials. The results help researchers understand metabolic processes, investigate biochemical changes and study the relationship between molecular processes and biological function.'],

        ['2. Major Classes of Biochemical Substances',
        'Important analyte groups include carbohydrates such as glucose, lipids such as cholesterol and triglycerides, proteins and amino acids, enzymes, electrolytes and metabolic waste products such as urea and creatinine. Each analyte has specific chemical properties that influence its selection, measurement and interpretation. Understanding the biological function of an analyte is essential before selecting an analytical method.'],

        ['3. Principles of Analytical Methods',
        'Biochemical laboratories employ several analytical techniques. Spectrophotometry measures the absorption of light by a substance or a reaction product. Colorimetric methods estimate analyte concentration through the intensity of a coloured product. Enzyme-based assays measure reactions catalysed by specific enzymes. Chromatographic methods separate components of mixtures, while electrophoretic techniques separate molecules according to properties such as charge and size. The method selected should be appropriate for the analyte, sample matrix and intended analytical purpose.'],

        ['4. Specimen Collection and Preparation',
        'Reliable biochemical results begin with appropriate specimen collection and handling. Factors such as patient preparation, collection technique, anticoagulant selection, sample labelling, transport temperature, processing time and storage conditions can affect analytical results. Haemolysis, contamination and inappropriate storage may introduce errors. Laboratories should follow validated procedures for specimen collection, separation, preservation and rejection of unsuitable samples.'],

        ['5. Calibration and Quality Control',
        'Calibration establishes the relationship between an instrument response and known reference concentrations or values. Quality control evaluates whether an analytical procedure continues to perform within defined acceptance limits. Laboratories may use control materials, blanks, calibration standards, replicate measurements and documented equipment checks. Calibration and quality control are complementary activities and should be supported by appropriate records and corrective actions when results fall outside acceptable limits.'],

        ['6. Interpretation of Biochemical Results',
        'Analytical results should not be interpreted in isolation. Interpretation requires attention to measurement units, reference intervals, analytical uncertainty, specimen quality, biological variation and the purpose of the investigation. A result outside a reference interval does not automatically establish a diagnosis. Scientific conclusions must consider the relevant biological context and, where appropriate, additional laboratory findings.'],

        ['7. Common Sources of Analytical Error',
        'Errors may arise before, during or after analysis. Pre-analytical errors include incorrect patient or sample identification, unsuitable collection tubes and improper storage. Analytical errors may involve instrument malfunction, reagent deterioration, incorrect calibration and procedural deviations. Post-analytical errors include transcription mistakes, incorrect units and inappropriate reporting. A structured quality management system helps laboratories identify, monitor and reduce these sources of error.'],

        ['8. Conclusion',
        'Biochemical analysis is an essential component of laboratory science because it connects chemical measurements with biological interpretation. Reliable results depend on sound analytical principles, appropriate specimen handling, validated methods, calibration, quality control and careful interpretation. Laboratory professionals must understand both the scientific basis of each method and the limitations that influence the quality of reported results.'],

        ['References and Further Reading',
        'Nelson and Cox, Lehninger Principles of Biochemistry (2021); Skoog, Holler and Crouch, Principles of Instrumental Analysis (2018); World Health Organization, Laboratory Quality Management System: Handbook (2011).']
      ]
    }
  };

  const projects = {
    'natural-products':{
      id:'natural-products',
      status:'Active development',
      area:'Natural Products · Analytical Science',
      title:'Natural Product Characterization Framework',
      summary:'A developing framework for planning, documenting and interpreting laboratory investigation of natural products.',
      leadAuthorId:'editorial',
      team:['editorial'],
      objectives:['Define reproducible sample preparation workflows.','Connect analytical methods with research questions.','Create structured documentation for results and interpretation.'],
      methods:['Literature review and research-question definition.','Sample preparation and controlled experimental documentation.','Analytical characterization using appropriate laboratory methods.','Quality checks and structured data analysis.'],
      outputs:['Research documentation','Scientific diagrams','Analytical datasets where appropriate','Research notes and publications arising from documented work'],
      articles:['metabolism'],
      publications:['pub-natural']
    },

    'instrumentation-workflow':{
      id:'instrumentation-workflow',
      status:'Planned',
      area:'Instrumentation · Quality Assurance',
      title:'Analytical Instrumentation & Measurement Workflow',
      summary:'A structured framework for connecting measurement principles, calibration, validation and laboratory reporting.',
      leadAuthorId:'editorial',
      team:['editorial'],
      objectives:['Document measurement principles for selected instruments.','Connect calibration and validation to analytical decisions.','Develop reproducible laboratory reporting structures.'],
      methods:['Literature review','Instrument-principle mapping','Calibration and QC workflow design','Method documentation'],
      outputs:['Instrument guides','Analytical workflow diagrams','Quality-control templates'],
      articles:['uvvis','qa','biochemical-analysis'],
      publications:['pub-uvvis']
    },

    'data-ai-workflow':{
      id:'data-ai-workflow',
      status:'Planned',
      area:'Data & AI · Scientific Computing',
      title:'Laboratory Data & AI Workflow',
      summary:'A planned workflow for preparing, analysing, visualising and responsibly interpreting laboratory datasets.',
      leadAuthorId:'dataai',
      team:['dataai'],
      objectives:['Define a reproducible laboratory-data pipeline.','Integrate descriptive statistics and visualization.','Explore appropriate computational and AI-assisted methods while preserving scientific oversight.'],
      methods:['Data cleaning and validation','Exploratory analysis','Statistical modelling','Visualization','Responsible AI workflow design'],
      outputs:['Analysis templates','Training datasets where appropriate','Scientific dashboards and visualizations','Methods notes'],
      articles:['data'],
      publications:['pub-data']
    }
  };

  const publications = {
    'pub-natural':{
      id:'pub-natural',
      type:'Research Note',
      year:2026,
      title:'Understanding Metabolic Regulation',
      articleId:'metabolism',
      projectId:'natural-products',
      authors:['editorial'],
      status:'Knowledge publication',
      identifier:'VOC-KS-2026-001'
    },

    'pub-uvvis':{
      id:'pub-uvvis',
      type:'Method Note',
      year:2026,
      title:'UV–Visible Spectrophotometry',
      articleId:'uvvis',
      projectId:'instrumentation-workflow',
      authors:['editorial'],
      status:'Knowledge publication',
      identifier:'VOC-KS-2026-002'
    },

    'pub-data':{
      id:'pub-data',
      type:'Research Note',
      year:2026,
      title:'From Laboratory Data to Scientific Insight',
      articleId:'data',
      projectId:'data-ai-workflow',
      authors:['dataai'],
      status:'Knowledge publication',
      identifier:'VOC-KS-2026-003'
    }
  };

  function esc(v){
    return String(v??'').replace(/[&<>'"]/g,c=>({
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      "'":'&#39;',
      '"':'&quot;'
    }[c]));
  }

  function author(id){
    return authors[id] || authors.editorial;
  }

  function article(id){
    return articles[id] || articles.metabolism;
  }

  function project(id){
    return projects[id] || projects['natural-products'];
  }

  function publication(id){
    return publications[id] || publications['pub-natural'];
  }

  function authorName(id){
    return author(id).name;
  }

  function articleCard(a){
    return `<article class="card"><label>${esc(a.category)}</label><h3>${esc(a.title)}</h3><p>${esc(a.subtitle)}</p><p class="small">${esc(a.type)} · ${esc(a.date.slice(0,4))} · ${esc(authorName(a.authorId))}</p><a href="article.html?id=${encodeURIComponent(a.id)}">Read article →</a></article>`;
  }

  window.VOC={
    authors,
    references,
    articles,
    projects,
    publications,
    esc,
    author,
    article,
    project,
    publication,
    articleCard,
    authorName
  };

  // Backwards-compatible globals for simple inline components.
  window.VOC_AUTHORS=authors;
  window.VOC_ARTICLES=articles;
  window.VOC_PROJECTS=projects;
  window.VOC_PUBLICATIONS=publications;

  window.esc=esc;
  window.author=author;
  window.article=article;
  window.project=project;
  window.publication=publication;
  window.articleCard=articleCard;
})();
