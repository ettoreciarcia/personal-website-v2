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

resource "aws_s3_bucket" "s3import" {
    arn                         = "arn:aws:s3:::testing-import-bucket-ciarcia"
    bucket                      = "testing-import-bucket-ciarcia1"
  
    hosted_zone_id              = "Z1BKCTXD74EZPE"

  
    request_payer               = "BucketOwner"
    tags                        = {}
    tags_all                    = {}

    versioning {
        enabled    = false
        mfa_delete = false
    }
}