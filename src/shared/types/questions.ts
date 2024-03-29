// Generated by https://quicktype.io

export interface Question {
  question:      string;
  input_format:  string;
  output_format: string;
  solution:      Solution[];
  sample_io:     SampleIo[];
  testcases:     Testcase[];
}

export interface Solution {
  language: string
  code: string
}

export interface SampleIo {
  input:      string;
  output:     string;
}

export interface Testcase extends SampleIo {
  difficulty: string;
  score:      number;
}
