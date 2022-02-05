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
  bucket = "ciarciasbucket2"
  acl    = "private"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}