import React from "react"

import Ref from "../components/Writings/Ref"
import Fig from "../components/Writings/Fig"
import Table from "../components/Writings/Table"
import Section from "../components/Writings/Section"

class TfbsResearch2020 extends React.Component {
    render() {
        const images = require.context("../images/posts/tfbs-research-2020")

        return (<>
            <div class='content'>
                <p class='abstract'><b>Abstract:</b> There has been a recent surge in publicly available cancer genomic data, which can help reveal the fundamental mechanisms behind the genetic mutations responsible for cancer. Despite this data, however, we still do not fully understand how mutations within TFBSs arise. By generating mutation profiles observed for these binding sites and comparing them to expected mutation profiles (generated based on sequence), we can better understand the mutagenesis in these regions. In this project, I aimed to replicate and confirm previous findings correlating TFBSs with elevated mutation rates, and to expand their methodology to include other cancer-related genomic datasets. I also aimed to optimize the runtime involved in the computationally expensive task of creating these mutation profiles by exploring various existing bioinformatics tools and parallelization methods for the intersection of mutation files with binding sites. With these results, we hope to better understand the role of TF binding in DNA damage and repair, specifically in the context of cancer genomes.</p>
                <div class='line-break' />

                <h4 id='s1'>1. Introduction</h4>
                <p>There has been a recent surge in publicly available cancer genomic data—driven by increased computational capacities and fast high-throughput technologies such as next-generation sequencing—in projects such as the International Cancer Genome Consortium (ICGC) and the Cancer Genome Atlas (TCGA),<Ref n='1' /><sup>,</sup><Ref n='2' /> which can help improve our understanding of the fundamental mechanisms behind the genetic mutations responsible for cancer.</p>
                <p>For example, mutation rates are very heterogeneous across the genome,<Ref n='3' /><sup>,</sup><Ref n='4' /> and we still do not fully understand how mutations arise in noncoding regions, specifically within transcription factor binding sites (TFBSs)—regions in the genome where proteins called transcription factors (TFs) bind to turn genes on or off. Previous studies have independently found elevated mutation rates within TFBSs of melanoma patient genomes,<Ref n='5' /><sup>,</sup><Ref n='6' /> a general observation whose mechanism remains unclear. One proposed mechanism has attributed this phenomenon to competitive binding between TFs and the machinery involved in nucleotide excision repair (NER),<Ref n='5' /> while another has tied this phenomenon directly to transcription initiation at promoters.<Ref n='6' /> In either mechanism, unrepaired somatic mutations accumulate in these regions and increase the risk of cancer (<Fig n='1' />).<Ref n='5' /><sup>,</sup><Ref n='6' /> Because TFs are crucial for gene expression and therefore cell function, the correlation may represent a meaningful driver of mutagenesis.</p>
                <figure id='fig1'>
                    <img
                        src={images("./fig1.png")}
                        alt={"Figure 1"}
                        style={{ width: "75%" }}
                    />
                    <figcaption><b>Figure 1</b> | <b>Model showing the mutation and repair rates in TFBSs and nucleosome regions.</b><Ref n='5' /> Under this model, accessibility of the DNA to NER machinery determines the mutation rate at each nucleotide. Where the DNA is inaccessible to repair machinery, either by a bound TF at an active TFBS or by a nucleosome, lower repair rates and higher mutation rates are observed. Conversely, accessible regions of DNA, such as in non-bound DHSs and in linker DNA, experience the opposite. According to Sabarinathan <i>et al.</i>, this decrease in NER activity is to blame for the higher mutation rates observed in TFBSs and nucleosome regions.<Ref n='5' /></figcaption>
                </figure>
                <p>By generating mutation profiles observed for TFBSs and comparing them to expected mutation profiles (generated based on sequence), we can better understand the mutagenesis in these regions. However, this is a computationally expensive task. In the Encyclopedia of DNA Elements (ENCODE) and the International Cancer Genome Consortium (ICGC), over 100 TFs and genomes from about 22,000 cancer patients across 59 tumor types are represented.<Ref n='7' /><sup>,</sup><Ref n='8' /> To give a sense of scale, generating mutation profiles for just one cancer type (melanoma) involves intersecting a 42-GB dataset of mutations with a 3-MB TFBS dataset.</p>
                <p>In this project, I aimed to replicate and confirm Sabarinathan <i>et al.</i>’s findings correlating TFBSs with increased levels of mutations,<Ref n='5' /> and to expand their methodology to include other cancer-related genomic datasets. I also aimed to optimize the computational time involved in creating these profiles by exploring various existing bioinformatics tools and parallelization methods for the intersection of mutation files with binding sites. With these results, we hope to better understand the role of TF binding in DNA damage and repair, specifically in the context of cancer genomes.</p>
                <p>These existing studies by Sabarinathan <i>et al.</i> and Perera <i>et al.</i> provide us some information about this novel potential path for mutagenesis,<Ref n='5' /><sup>,</sup><Ref n='6' /> but their related yet conflicting proposed mechanisms are important to understand and differentiate. Both studies were also limited by the fact that the underlying data used, especially those for TFBSs, were likely imperfect. Though we have not yet interrogated this issue in depth, for example, the distal TFBSs used did not appear truly distal, and I suspected that some of the unlabeled somatic mutations or mutations labeled whole-genome sequencing (WGS) actually represented, or overrepresented, exome-sequenced mutations. We plan to investigate these issues further in the future.</p>
                <p>With optimized tools and efficient methods of generating mutation profiles, we can more practically replicate these analyses, and we can advance from confirming previous findings to asking more specific questions from the data, such as which of the two mechanisms is more likely.</p>

                <h4 id='s2'>2. TF Binding and DNA Repair</h4>
                <h5 id='s2.1'>2.1. Methods</h5>
                <p>I sought partly to replicate the methods and confirm the findings by Sabarinathan <i>et al.</i><Ref n='5' /> The merged TFBS coordinates used were identical to those used in the original study<Ref n='5' />—created by intersecting TFBS coordinates from the ENCODE project with DNase I hypersensitive sites (DHSs, which mark transcriptionally active regions) from the Roadmap Epigenomics project,<Ref n='7' /><sup>,</sup><Ref n='9' /> then merging the overlapping binding sites of the same TFs. Somatic mutations from 18 cancer projects, chosen to pair with the six available tumor types represented in TFBS data (Extended Data Table 1), were obtained from ICGC Data Release 28 and consolidated into 11 cancer types (Extended Data Table 2).<Ref n='8' /> And the DHSs for four primary cell types were obtained from the Roadmap Epigenomics project (Extended Data Table 1).<Ref n='9' /></p>
                <p>The merged TFBSs were intersected with the DHSs of a given primary cell type to generate coordinates for active TFBS regions in that primary cell type. Because intersection operations are symmetric, this can also be seen as TFBS regions within DHSs, or TF-bound DHS regions. I defined the active TFBS and its flanking regions to be ±1,000 bp from the center of each active TFBS region. These regions were then intersected with the somatic mutation coordinates for the corresponding cancer type, after which each resulting coordinate was converted into the relative distance from its respective TFBS center. These data showed the levels of mutation enrichment within active TFBSs, as a function of relative distance from the TFBS center. I also preserved the TF identity for each of these intersected mutations, so that I could later break down these enrichment data by individual TFs.</p>
                <p>I segregated these mutations in active TFBSs further by selecting for those within promoters or enhancers. Promoter regions were defined as 2,000 bp upstream and 1,000 bp downstream of transcription start sites (TSSs), obtained from the Reference Sequence (RefSeq) database by the National Center for Biotechnology Information (NCBI).<Ref n='10' /> Though promoters—DNA sequences to which TFs bind to initiate transcription—are typically located upstream from the TSS, some promoter elements exist downstream,<Ref n='11' /> hence the choice of definition. Enhancer regions—regulatory elements similar to promoters but located much farther away from the TSS—were obtained from the Functional Annotation of the Mammalian Genome (FANTOM) project.<Ref n='12' /></p>
                <p>The background mutation enrichment was measured by subtracting the active TFBSs from the total merged TFBSs, and intersecting the resulting unbound DHSs with the somatic mutation coordinates. These data showed the levels of mutation enrichment within inactive TFBSs, as a function of relative distance from the TFBS center.</p>
                <p>I conducted these analyses for nine different mutation cancer types: breast cancer (BRCA), colon adenocarcinoma (COAD), colorectal cancer (COCA), lung adenocarcinoma (LUAD), lung squamous cell carcinoma (LUSC), skin adenocarcinoma (SKCA), skin cutaneous melanoma (SKCM) and melanoma (MELA).</p>
                <h5 id='s2.2'>2.2. Results and Discussion</h5>
                <p>There were clear peaks in mutation enrichment at the centers of TFBSs for LUSC, MELA and SKCA (<Fig n='2' l='a' />), and a small peak for BRCA. The other cancer types—COAD, COCA, LUAD, READ and SKCM—actually saw a dip in enrichment at the centers of TFBSs, creating M-shaped curves (<Fig n='2' l='b' />).</p>
                <p>The peak shape observed for MELA matched the results for melanoma by Sabarinathan <i>et al.</i> (<Fig n='2' l='c' />).<Ref n='5' /> The cancer types that did display the characteristic peak have different mutational signatures and did not appear to share many characteristics,<Ref n='13' /> save for one: their data’s large sizes compared to the cancer types without a center peak in their mutational profiles (Extended Data Table 2).</p>
                <p>It is unclear why some of the cancer types showed M-shaped mutation profiles, where mutation enrichment levels are low at the center of TFBSs and in the flanking regions, but high at around ±250 bp from the center (<Fig n='2' l='b' />). Though BRCA appears to show a small center peak, the slightly M-shaped profile in the promoter regions puts this peak in doubt (Extended Data Fig. 1b).</p>
                <figure id='fig2'>
                    <img
                        src={images("./fig2.png")}
                        alt={"Figure 2"}
                        style={{ width: "100%" }}
                    />
                    <figcaption><b>Figure 2</b> | <b>Selection of mutation profiles.</b> <b>a</b>, Mutation profile for melanoma (MELA), represented as the number of mutations a given distance away from the center of an active TFBS. Blue curve represents mutations in bound DHSs, and the orange line in unbound DHSs. <b>b</b>, Mutation profile for colon adenocarcinoma (COAD), with same conventions as Fig. 2a. <b>c</b>, Mutation profile for melanoma as presented by Sabarinathan <i>et al.</i>, as well as a zoomed-in region on ±100 bp from the TFBS center to show that the peak persists at higher resolutions.<Ref n='5' /></figcaption>
                </figure>

                <h4 id='s3'>3. Other Selections of the Data</h4>
                <p>I also ventured outside of Sabarinathan <i>et al.</i>’s methods and created mutation profiles for various other selections of the data.<Ref n='5' /> I intersected the ICGC somatic mutations with cancer-specific active proximal TFBSs, identical to those used in the original study,<Ref n='5' /><sup>,</sup><Ref n='8' /> results of which I dubbed “All” (<Fig n='3' l='a' />).</p>
                <p>I filtered the somatic mutations to include only those whose sequencing strategy was marked WGS, so as to try avoiding bias from any possible exome data, then I intersected them with cancer-specific active proximal TFBSs. I dubbed the results of this experiment “WGS” (<Fig n='3' l='b' />).</p>
                <p>In a different approach to the same problem, I intersected the somatic mutations with noncoding regions, obtained by complementing one of two coding-regions files: (1) that from the University of California, Santa Cruz (UCSC), Genome Browser on Human Dec. 2013 (GRCh38/hg38) Assembly, and (2) that used by Sabarinathan <i>et al.</i><Ref n='5' /><sup>,</sup><Ref n='14' /> Then I intersected them with cancer-specific active proximal TFBSs, the results of which I dubbed “NC1” and “NC2” (<Fig n='3' l='c,d' />).</p>
                <p>I intersected the somatic mutations with promoter regions, defined as 2,000 bp upstream and 1,000 bp downstream from each RefSeq TSS,<Ref n='10' /> then with cancer-specific active proximal TFBSs, the results of which I dubbed “TSS” (<Fig n='3' l='e' />).</p>
                <p>I intersected the somatic mutations with the FANTOM enhancers,<Ref n='12' /> then with cancer-specific active proximal TFBSs, the results of which I dubbed “Enhancers” (<Fig n='3' l='f' />).</p>
                <p>I also repeated the “All” experiment with inactive proximal TFBSs (<Fig n='3' l='g' />), and the “All” and “Enhancers” experiments with active distal TFBSs (<Fig n='3' l='h,i' />).<Ref n='5' /></p>
                <figure id='fig3'>
                    <img
                        src={images("./fig3.png")}
                        alt={"Figure 3"}
                        style={{ width: "100%" }}
                    />
                    <figcaption><b>Figure 3</b> | <b>Various melanoma mutation profiles.</b> The methodologies for generating these profiles, as well as the names of the experiments, are outlined in <Section n='3' />. <b>a</b>, All. <b>b</b>, WGS. <b>c</b>, NC1. <b>d</b>, NC2. <b>e</b>, TSS. <b>f</b>, Enhancers. <b>g</b>, All, but with inactive proximal TFBSs. <b>h</b>, All, but with active distal TFBSs. <b>i</b>, Enhancers, but with active distal TFBSs.</figcaption>
                </figure>

                <h4 id='s4'>4. Exploring Computational Methods</h4>
                <h5 id='s4.1'>4.1. Methods</h5>
                <p>I explored ways to optimize the runtime of the computationally expensive task of intersecting large datasets. I tried two popular bioinformatics tools: BEDTools v2.25.0,<Ref n='15' /> currently used by our lab, and BEDOPS v2.4.35, advertised as a faster alternative to BEDTools.<Ref n='16' /> For BEDTools, I used both the default and the <code>--sorted</code> option, which assumes sorted input files and is claimed to decrease runtimes substantially. Because both tools, written largely in C and C++, have been in active development for almost a decade, I did not try writing my own implementation of the intersect operation.</p>
                <p>The BEDOPS equivalent to BEDTools’ intersect appeared to be the <code>--intersect</code> flag, but this operation returned only the start and end coordinates of intersecting regions and destroyed all other fields. Therefore, I chose BEDOPS’ bedmap, whose intended purpose is to map the elements of one BED file to another, then perform operations on the overlapping regions. I used the <code>--range 1</code> option to capture as few as 1 bp of overlap, and I used the <code>--echo</code> and <code>--echo-map</code> operations to return information from both datasets for all overlapping regions in a dictionary-type format, which I processed with regular expressions and AWK to convert it into the familiar, BEDTools-like output. The code snippets below show identical operations, in terms of output.</p>
                <p>
                    <code>bedtools intersect -a "$FILE_A" -b "$FILE_B" -wa -wb</code>
                </p>
                <p>
                    <code>bedmap --range 1 --echo --echo-map "$FILE_A" "$FILE_B" |</code><br />
                    <code>&nbsp;&nbsp;sed -e '/|$/d' |</code><br />
                    <code>&nbsp;&nbsp;{`awk 'BEGIN{FS="|"; OFS="\t";} {`}</code><br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;n=split($2, vals, ";");</code><br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;{`for(i=1; i<=n; i++) {`}</code><br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print $1, vals[i];</code><br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;}</code><br />
                    <code>&nbsp;&nbsp;}'</code>
                </p>
                <p>I originally planned to run all trials first on a local computer, then on the terminal of the High-Throughput Applied Research Data Analysis Cluster (HARDAC)—the high-performance computing cluster operated by Duke University’s Center for Genomic and Computational Biology (GCB)—then on HARDAC as batched jobs. In testing, however, I quickly discovered that my personal computer—a 2018 MacBook Pro with 8 GB of memory—was not powerful enough to perform the intersections in any reasonable time. I also ruled out the HARDAC terminal option, as BEDTools and BEDOPS were inaccessible from the terminal. Therefore, I ran all tests as batched jobs on HARDAC.</p>
                <p>I tested the methods on a basic yet expensive operation common to all experiments in this project: intersecting the melanoma somatic mutations with active proximal TFBSs for skin cancers. The melanoma dataset was used in its entirety (42 GB), as a random 50% sample (about 21 GB), and as a random 25% sample (about 11 GB). Due to the sheer size of the dataset, traditional sampling tools such as <code>shuf</code>—which loads the entire file in memory—could not be used, so I opted for a probabilistic method of subsetting the data using Perl instead.</p>
                <h5 id='s4.2'>4.2. Results</h5>
                <p>The runtimes appeared to scale roughly linearly with data size. Compared to the sorted implementation of BEDTools, BEDOPS, which brands itself as the faster of the two,16 had negligible effect on smaller samples but had a small yet noticeable effect on the very large dataset in its entirety (<Table n='1' />).</p>
                <figure id='table1'>
                    <span><b>Table 1</b> | <b>Benchmark Runtimes for Melanoma Mutation–Skin Cancer TFBS Intersections.</b></span>
                    <img
                        src={images("./table1.png")}
                        alt={"Table 1"}
                        style={{ width: "100%" }}
                    />
                    <figcaption>* The somatic mutations data for melanoma, in its entirety, has a file size of about 42 GB with 83,030,183 entries.</figcaption>
                    <figcaption>† The “unsorted” and “sorted” refer to the default and the <code>--sort</code> implementations of BEDTools intersect.</figcaption>
                    <figcaption>‡ The exact implementation used for BEDOPS is shown in <Section n='4.1' />.</figcaption>
                </figure>
                <p>I conclude that BEDOPS may be desired over BEDTools if the dataset is exceptionally large; otherwise, the lexicographical sort order required and the complicated nature of calling BEDOPS may outweigh any benefit. Surprisingly, the unsorted version of BEDTools was faster than either the sorted version or BEDOPS. More analyses are needed to confirm and explain this counterintuitive phenomenon.</p>
            </div>
            <div class='line-break' />

            <div class='refs'>
                <h4>References</h4>
                <ol>
                    <li id='ref1'>Zhang, J. <i>et al.</i> The International Cancer Genome Consortium Data Portal. <i>Nat. Biotechnol.</i> 37, 367–369 (2019).</li>
                    <li id='ref2'>Weinstein, J. N. <i>et al.</i> The Cancer Genome Atlas pan-cancer analysis project. <i>Nat. Genet.</i> 45, 1113–1120 (2013).</li>
                    <li id='ref3'>Lawrence, M. S. <i>et al.</i> Mutational heterogeneity in cancer and the search for new cancer-associated genes. <i>Nature</i> 499, 214–218 (2013).</li>
                    <li id='ref4'>Polak, P. <i>et al.</i> Reduced local mutation density in regulatory DNA of cancer genomes is linked to DNA repair. <i>Nat. Biotechnol.</i> 32, 71–75 (2014).</li>
                    <li id='ref5'>Sabarinathan, R., Mularoni, L., Deu-Pons, J., Gonzalez-Perez, A. & López-Bigas, N. Nucleotide excision repair is impaired by binding of transcription factors to DNA. <i>Nature</i> 532, 264–267 (2016).</li>
                    <li id='ref6'>Perera, D. <i>et al.</i> Differential DNA repair underlies mutation hotspots at active promoters in cancer genomes. <i>Nature</i> 532, 259–263 (2016).</li>
                    <li id='ref7'>Khurana, E. <i>et al.</i> Integrative annotation of variants from 1,092 humans: Application to cancer genomics. <i>Science</i> 342, 1235587 (2013).</li>
                    <li id='ref8'>Dunham, I. <i>et al.</i> An integrated encyclopedia of DNA elements in the human genome. <i>Nature</i> 489, 57–74 (2012).</li>
                    <li id='ref9'>Roadmap Epigenomics Consortium <i>et al.</i> Integrative analysis of 111 reference human epigenomes. <i>Nature</i> 518, 317–329 (2015).</li>
                    <li id='ref10'>O’Leary, N. A. <i>et al.</i> Reference sequence (RefSeq) database at NCBI: Current status, taxonomic expansion, and functional annotation. <i>Nucleic Acids Res.</i> 44, D733–D745 (2015).</li>
                    <li id='ref11'>Kutach, A. K. & Kadonaga, J. T. The downstream promoter element DPE appears to be as widely used as the TATA box in Drosophila core promoters. <i>Mol. Cell. Biol.</i> 20, 4754–4764 (2000).</li>
                    <li id='ref12'>Lizio, M. <i>et al.</i> Update of the FANTOM web resource: High resolution transcriptome of diverse cell types in mammals. <i>Nucleic Acids Res.</i> 45, D737–D743 (2016).</li>
                    <li id='ref13'>Alexandrov, L. B. <i>et al.</i> Signatures of mutational processes in human cancer. <i>Nature</i> 500, 415–421 (2013).</li>
                    <li id='ref14'>Kent, W. J. <i>et al.</i> The human genome browser at UCSC. <i>Genome Res.</i> 12, 996–1006 (2002).</li>
                    <li id='ref15'>Quinlan, A. R. & Hall, I. M. BEDTools: A flexible suite of utilities for comparing genomic features. <i>Bioinformatics</i> 26, 841–842 (2010).</li>
                    <li id='ref16'>Neph, S. <i>et al.</i> BEDOPS: High-performance genomic feature operations. <i>Bioinformatics</i> 28, 1919–1920 (2012).</li>
                </ol>
            </div>
        </>)
    }
}

export default TfbsResearch2020
