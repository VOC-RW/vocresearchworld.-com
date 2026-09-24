/* VOC Research World — V6.1 content architecture
   Relationships: Authors ↔ Articles ↔ Projects ↔ Publications ↔ References
   This file is intentionally static and backend-ready. A future CMS/database can
   replace these objects without changing the page structure.
*/
(function(){
  const authors = {
    editorial: {
      id:'editorial', name:'VOC Research Editorial Team', shortName:'VOC Editorial Team', role:'Research, education & publication development', initials:'VR',
      affiliation:'VOC Research World', bio:'The editorial team develops scientific educational content, research notes and publication structures across laboratory science and applied research.',
      interests:['Biochemistry','Analytical Science','Quality Assurance','Instrumentation','Scientific Communication'],
      discipline:'Laboratory Science & Scientific Publishing', profileStatus:'Editorial team profile', orcid:'', keywords:['biochemistry','analytical science','quality assurance','instrumentation','scientific communication'], contributions:['Scientific education and knowledge development','Research-note and publication development','Editorial structuring and quality review'],
      articles:['metabolism','uvvis','qa'], projects:['natural-products','instrumentation-workflow']
    },
    dataai: {
      id:'dataai', name:'VOC Data & AI Team', shortName:'VOC Data & AI Team', role:'Scientific data analysis & computational workflows', initials:'DA',
      affiliation:'VOC Research World', bio:'The Data & AI team focuses on reproducible scientific data preparation, statistical analysis, visualization and responsible computational methods.',
      interests:['Data Analysis','Statistics','Scientific Computing','Visualization','AI for Science'],
      discipline:'Scientific Data & Computational Research', profileStatus:'Research team profile', orcid:'', keywords:['data analysis','statistics','scientific computing','visualization','AI for science'], contributions:['Laboratory data analysis workflows','Scientific visualization and interpretation','Responsible computational methods'],
      articles:['data'], projects:['data-ai-workflow']
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
    metabolism:{id:'metabolism', type:'Research Note', category:'Biochemistry', title:'Understanding Metabolic Regulation', subtitle:'How cells coordinate pathways, enzymes and energy flow.', date:'2026-03-12', authorId:'editorial', projectId:'natural-products', keywords:['metabolism','enzymes','feedback inhibition','hormonal regulation'], references:['r1','r5'], related:['qa','uvvis'], sections:[
      ['Abstract','Metabolic regulation allows cells to coordinate energy production, biosynthesis and nutrient use while responding to changing physiological conditions.'],
      ['Introduction','Metabolic pathways operate as connected networks rather than isolated reactions. Regulation determines when substrates enter pathways, how rapidly intermediates are processed and how cellular resources are allocated.'],
      ['Scientific Discussion','Important regulatory mechanisms include allosteric control, covalent modification, feedback inhibition, changes in enzyme synthesis and degradation, and hormonal control. The effect of a regulator depends on the pathway, tissue, nutritional state and cellular compartment.'],
      ['Research Perspective','A structured research approach can connect biochemical regulation to measurable laboratory variables, including enzyme activity, metabolite concentration and analytical biomarkers.']
    ]},
    uvvis:{id:'uvvis', type:'Method Note', category:'Analytical Science', title:'UV–Visible Spectrophotometry', subtitle:'Principles, calibration, Beer–Lambert law and interpretation.', date:'2026-02-18', authorId:'editorial', projectId:'instrumentation-workflow', keywords:['UV-Vis','spectrophotometry','Beer-Lambert law','calibration'], references:['r2','r4','r5'], related:['data','metabolism'], sections:[
      ['Abstract','UV–Visible spectrophotometry measures the interaction between radiation and matter and is widely used for quantitative and qualitative laboratory analysis.'],
      ['Principle','A sample absorbs selected wavelengths of electromagnetic radiation. Under suitable conditions, absorbance is related to concentration through the Beer–Lambert relationship.'],
      ['Calibration and Quality','Reliable analysis requires an appropriate blank, standards or calibration materials, suitable wavelength selection, clean optical cells and quality-control checks. Calibration performance should be assessed rather than assumed.'],
      ['Interpretation','Results should be reported with units, calibration information and relevant uncertainty or quality-control observations. Deviations from linearity may arise from chemical, instrumental or procedural factors.']
    ]},
    data:{id:'data', type:'Research Note', category:'Data & AI', title:'From Laboratory Data to Scientific Insight', subtitle:'A structured workflow for scientific data analysis.', date:'2026-01-26', authorId:'dataai', projectId:'data-ai-workflow', keywords:['data analysis','statistics','visualization','regression'], references:['r3','r5'], related:['uvvis','qa'], sections:[
      ['Abstract','Scientific data analysis transforms measurements into evidence through cleaning, descriptive statistics, visualization, modelling and interpretation.'],
      ['Data Preparation','Laboratory datasets should be checked for missing values, duplicates, incorrect units, transcription errors and unusual observations before formal analysis.'],
      ['Analysis','Descriptive statistics provide an initial summary. Correlation can quantify association, while regression can model relationships when assumptions and study design support that interpretation.'],
      ['Scientific Interpretation','A statistical pattern is not automatically a causal relationship. Conclusions should reflect the study design, measurement quality, uncertainty and biological or chemical context.']
    ]},
    qa:{id:'qa', type:'Quality Note', category:'Quality Assurance', title:'Quality Assurance versus Quality Control', subtitle:'How QA and QC work together in laboratory systems.', date:'2026-01-10', authorId:'editorial', projectId:'instrumentation-workflow', keywords:['quality assurance','quality control','calibration','validation'], references:['r4','r5'], related:['uvvis','data'], sections:[
      ['Abstract','Quality assurance and quality control are related but distinct components of a laboratory quality system.'],
      ['Quality Assurance','QA focuses on planned and systematic activities that create confidence that a process can consistently produce fit-for-purpose results.'],
      ['Quality Control','QC focuses on operational checks and measurements used to determine whether analytical results meet defined requirements.'],
      ['Integrated Practice','Calibration, method verification, documentation, competency, equipment maintenance and control materials can work together within a broader quality system.']
    ]}
  };

  const projects = {
    'natural-products':{id:'natural-products', status:'Active development', area:'Natural Products · Analytical Science', title:'Natural Product Characterization Framework', summary:'A developing framework for planning, documenting and interpreting laboratory investigation of natural products.', leadAuthorId:'editorial', team:['editorial'], objectives:['Define reproducible sample preparation workflows.','Connect analytical methods with research questions.','Create structured documentation for results and interpretation.'], methods:['Literature review and research-question definition.','Sample preparation and controlled experimental documentation.','Analytical characterization using appropriate laboratory methods.','Quality checks and structured data analysis.'], outputs:['Research documentation','Scientific diagrams','Analytical datasets where appropriate','Research notes and publications arising from documented work'], articles:['metabolism'], publications:['pub-natural']},
    'instrumentation-workflow':{id:'instrumentation-workflow', status:'Planned', area:'Instrumentation · Quality Assurance', title:'Analytical Instrumentation & Measurement Workflow', summary:'A structured framework for connecting measurement principles, calibration, validation and laboratory reporting.', leadAuthorId:'editorial', team:['editorial'], objectives:['Document measurement principles for selected instruments.','Connect calibration and validation to analytical decisions.','Develop reproducible laboratory reporting structures.'], methods:['Literature review','Instrument-principle mapping','Calibration and QC workflow design','Method documentation'], outputs:['Instrument guides','Analytical workflow diagrams','Quality-control templates'], articles:['uvvis','qa'], publications:['pub-uvvis']},
    'data-ai-workflow':{id:'data-ai-workflow', status:'Planned', area:'Data & AI · Scientific Computing', title:'Laboratory Data & AI Workflow', summary:'A planned workflow for preparing, analysing, visualising and responsibly interpreting laboratory datasets.', leadAuthorId:'dataai', team:['dataai'], objectives:['Define a reproducible laboratory-data pipeline.','Integrate descriptive statistics and visualization.','Explore appropriate computational and AI-assisted methods while preserving scientific oversight.'], methods:['Data cleaning and validation','Exploratory analysis','Statistical modelling','Visualization','Responsible AI workflow design'], outputs:['Analysis templates','Training datasets where appropriate','Scientific dashboards and visualizations','Methods notes'], articles:['data'], publications:['pub-data']}
  };

  const publications = {
    'pub-natural':{id:'pub-natural', type:'Research Note', year:2026, title:'Understanding Metabolic Regulation', articleId:'metabolism', projectId:'natural-products', authors:['editorial'], status:'Knowledge publication', identifier:'VOC-KS-2026-001'},
    'pub-uvvis':{id:'pub-uvvis', type:'Method Note', year:2026, title:'UV–Visible Spectrophotometry', articleId:'uvvis', projectId:'instrumentation-workflow', authors:['editorial'], status:'Knowledge publication', identifier:'VOC-KS-2026-002'},
    'pub-data':{id:'pub-data', type:'Research Note', year:2026, title:'From Laboratory Data to Scientific Insight', articleId:'data', projectId:'data-ai-workflow', authors:['dataai'], status:'Knowledge publication', identifier:'VOC-KS-2026-003'}
  };

  function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  function author(id){return authors[id] || authors.editorial;}
  function article(id){return articles[id] || articles.metabolism;}
  function project(id){return projects[id] || projects['natural-products'];}
  function publication(id){return publications[id] || publications['pub-natural'];}
  function authorName(id){return author(id).name;}
  function articleCard(a){return `<article class="card"><label>${esc(a.category)}</label><h3>${esc(a.title)}</h3><p>${esc(a.subtitle)}</p><p class="small">${esc(a.type)} · ${esc(a.date.slice(0,4))} · ${esc(authorName(a.authorId))}</p><a href="article.html?id=${encodeURIComponent(a.id)}">Read article →</a></article>`;}
  window.VOC={authors,references,articles,projects,publications,esc,author,article,project,publication,articleCard,authorName};
  // Backwards-compatible globals for simple inline components.
  window.VOC_AUTHORS=authors; window.VOC_ARTICLES=articles; window.VOC_PROJECTS=projects; window.VOC_PUBLICATIONS=publications;
  window.esc=esc; window.author=author; window.article=article; window.project=project; window.publication=publication; window.articleCard=articleCard;
})();
