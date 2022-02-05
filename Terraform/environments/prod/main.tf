terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "hechaorganization"
    workspaces {
      name = "site"
    }
  }
}


provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "b" {
  bucket = "czndsjvndfkjvkzfdbvzdfkjbzdfkjvzkfjdn"
  acl    = "private"

  tags = {
    Name        = "òlsacòds<mckldskcmdsclkml"
    Environment = "Dev"
  }
}