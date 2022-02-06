terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "hechaorganization"
    workspaces {
      name = "mysite"
    }
  }
}


provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "b" {
  bucket = "jhbjdsfhdiughasjdgfjkdfgv"
  acl    = "private"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}